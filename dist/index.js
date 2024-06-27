"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  useChatState: () => useChatState,
  useVoiceChatState: () => useVoiceChatState
});
module.exports = __toCommonJS(src_exports);

// src/state.ts
var import_client = require("@scoopika/client");
var import_react = require("react");

// src/utils/sleep.ts
function sleep(ms) {
  if (typeof ms !== "number") {
    ms = 0;
  }
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
var sleep_default = sleep;

// src/state.ts
var setupRequest = (session_id, inputs, run_id, user_id) => {
  const req = {
    role: "user",
    at: Date.now(),
    session_id,
    run_id: run_id || crypto.randomUUID(),
    user_id,
    request: inputs,
    resolved_message: "PLACEHOLDER"
  };
  return req;
};
var agentPlaceholder = ({
  id,
  session_id,
  run_id,
  name,
  audio,
  tools_calls,
  content
}) => {
  const placeholder = {
    role: "agent",
    at: Date.now(),
    session_id,
    run_id,
    agent_id: id,
    agent_name: name || "",
    tools: [],
    response: {
      run_id,
      session_id,
      audio,
      tools_calls,
      content
    }
  };
  return placeholder;
};
var sortedMessages = (messages) => messages.sort((a, b) => a.at - b.at);
function useChatState(client, agent, state_options) {
  if (typeof agent === "string") {
    agent = new import_client.Agent(agent, client);
  }
  const [clientInstance] = (0, import_react.useState)(client);
  const [agentInstance] = (0, import_react.useState)(agent);
  const [session, setSession] = (0, import_react.useState)(
    (state_options == null ? void 0 : state_options.session_id) ?? "session_" + crypto.randomUUID()
  );
  const [loadingSession, setLoadingSession] = (0, import_react.useState)(false);
  const [status, setStatus] = (0, import_react.useState)();
  const [generating, setGenerating] = (0, import_react.useState)(false);
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [messages, setMessages] = (0, import_react.useState)([]);
  const [streamPlaceholder, setStreamPlaceholder] = (0, import_react.useState)(void 0);
  const getSessionMessages = async (id) => {
    setLoadingSession(true);
    const messages2 = await clientInstance.store.getSessionRuns(id);
    setMessages(messages2);
    setLoadingSession(false);
  };
  const changeSession = async (session2) => {
    const id = session2 ?? crypto.randomUUID();
    setSession(id);
    await getSessionMessages(id);
  };
  (0, import_react.useEffect)(() => {
    if (state_options == null ? void 0 : state_options.session_id) {
      getSessionMessages(state_options.session_id);
    }
  }, []);
  const newRequest = async ({
    inputs = {},
    options,
    hooks
  } = {}) => {
    try {
      while (generating || loading) {
        await sleep_default(5);
      }
      setLoading(true);
      options = { ...options || {} };
      options.session_id = session;
      const request = setupRequest(session, inputs, options == null ? void 0 : options.run_id);
      let run_id = request.run_id;
      setStreamPlaceholder(
        agentPlaceholder({
          id: agent.id,
          session_id: session,
          run_id,
          audio: [],
          content: "",
          tools_calls: []
        })
      );
      setMessages((prev) => [...sortedMessages(prev), request]);
      setStatus("Thinking...");
      const all_hooks = {
        ...hooks || {},
        onStart: (info) => {
          run_id = info.run_id;
          if (state_options == null ? void 0 : state_options.scroll) state_options.scroll();
        },
        onToken: (token) => {
          if (loading) setLoading(false);
          if (!generating) setGenerating(true);
          if (status) setStatus(void 0);
          setStreamPlaceholder((prev) => {
            if (!prev) return;
            return {
              ...prev,
              response: {
                ...prev.response,
                content: prev.response.content + token
              }
            };
          });
          if (hooks == null ? void 0 : hooks.onToken) hooks.onToken(token);
          if (state_options == null ? void 0 : state_options.scroll) state_options.scroll();
        },
        onToolCall: (call) => {
          setStatus(`Talking with ${call.function.name}`);
          if (hooks == null ? void 0 : hooks.onToolCall) hooks.onToolCall(call);
        },
        onToolResult: (res) => {
          setStatus(void 0);
          setStreamPlaceholder((prev) => {
            if (!prev) return;
            return {
              ...prev,
              tools: [...prev.tools, res],
              response: {
                ...prev.response,
                tools_calls: [...prev.response.tools_calls, res]
              }
            };
          });
          if (hooks == null ? void 0 : hooks.onToolResult) hooks.onToolResult(res);
        },
        onFinish: async () => {
          setStatus(void 0);
          const messages2 = await clientInstance.store.getSessionRuns(session);
          setStreamPlaceholder(void 0);
          setMessages(sortedMessages(messages2));
        }
      };
      const response = await agentInstance.run({
        inputs,
        options,
        hooks: all_hooks
      });
      return response;
    } catch (err) {
      if (hooks == null ? void 0 : hooks.onError)
        hooks.onError({
          healed: false,
          error: err.message ?? "Unexpected error"
        });
      console.error(err);
    } finally {
      setStatus(void 0);
      setLoading(false);
      setGenerating(false);
      const messages2 = await clientInstance.store.getSessionRuns(session);
      setMessages(messages2);
      if (state_options == null ? void 0 : state_options.scroll) state_options.scroll();
    }
  };
  return {
    generating,
    loading,
    status,
    streamPlaceholder,
    messages,
    newRequest,
    agent,
    session,
    changeSession,
    loadingSession
  };
}

// src/voice_state.ts
var import_client2 = require("@scoopika/client");
var import_react2 = require("react");
function useVoiceChatState(client, agent, state_options) {
  const [chatState] = (0, import_react2.useState)(useChatState(client, agent, state_options));
  const [agentVoicePlayer, setAgentVoicePlayer] = (0, import_react2.useState)(null);
  const [voiceRecorder, setVoiceRecorder] = (0, import_react2.useState)(null);
  const [voicePlaying, setVoicePlaying] = (0, import_react2.useState)(false);
  const [visualizer, setVisualizer] = (0, import_react2.useState)(null);
  const [recorderState, setRecorderState] = (0, import_react2.useState)("stopped");
  const [agentVoicePaused, setPlayerPaused] = (0, import_react2.useState)(false);
  const [working, setWorking] = (0, import_react2.useState)(false);
  const [recognizedText, setRecognizedText] = (0, import_react2.useState)();
  const [supportRecognition, setSupportRecognition] = (0, import_react2.useState)(
    null
  );
  const pauseAgentVoice = () => {
    if (!agentVoicePlayer) return;
    agentVoicePlayer.pause();
    setPlayerPaused(true);
  };
  const resumeAgentVoice = () => {
    if (!agentVoicePlayer) return;
    agentVoicePlayer.resume();
    setPlayerPaused(false);
  };
  const updateRecognizedText = (text) => {
    if (voiceRecorder) voiceRecorder.stop();
    if (voiceRecorder) voiceRecorder.text = text;
    setRecognizedText(text);
  };
  (0, import_react2.useEffect)(() => {
    setVoiceRecorder(
      new import_client2.VoiceRecorder({
        onStateChange: (state) => setRecorderState(state),
        onText: (text) => setRecognizedText(text)
      })
    );
    if (voiceRecorder) {
      setSupportRecognition(voiceRecorder.recognition !== null);
    }
    const visualize = state_options == null ? void 0 : state_options.agent_voice;
    if (visualize == null ? void 0 : visualize.canvas) {
      setVisualizer(
        new import_client2.VoiceVisualizer(
          visualize.audio,
          visualize.canvas,
          visualize.wave_color
        )
      );
    }
  }, []);
  const newRequest = async ({
    inputs,
    options,
    hooks
  } = {}) => {
    try {
      if (agentVoicePlayer == null ? void 0 : agentVoicePlayer.started) {
        agentVoicePlayer.pause();
        setVoicePlaying(false);
        setPlayerPaused(false);
      }
      let player = null;
      if (voiceRecorder) voiceRecorder.stop();
      if (!inputs && voiceRecorder) {
        inputs = await voiceRecorder.asRunInput();
      }
      if (!inputs) {
        throw new Error("No inputs provided to be processed by the agent");
      }
      setWorking(true);
      options = { voice: true, ...options || {} };
      if (state_options == null ? void 0 : state_options.agent_voice) {
        player = new import_client2.RunAudioPlayer(state_options.agent_voice.audio);
        setAgentVoicePlayer(player);
      }
      if (visualizer) visualizer.getReady();
      const all_hooks = {
        ...hooks || {},
        onAudio: (stream) => {
          if ((state_options == null ? void 0 : state_options.auto_play_audio) !== false) {
            setVoicePlaying(true);
            if (player) player.queue(stream);
          }
          if (hooks == null ? void 0 : hooks.onAudio) hooks.onAudio(stream);
        }
      };
      const response = await chatState.newRequest({
        inputs,
        options,
        hooks: all_hooks
      });
      setWorking(false);
      if (player && response) await player.finish(response.audio.length);
      setVoicePlaying(false);
      return response;
    } finally {
      setWorking(false);
      setVoicePlaying(false);
    }
  };
  return {
    ...chatState,
    voiceRecorder,
    setVoiceRecorder,
    voicePlaying,
    setVoicePlaying,
    agentVoicePlayer,
    setAgentVoicePlayer,
    newRequest,
    visualizer,
    setVisualizer,
    recorderState,
    setRecorderState,
    recognizedText,
    setRecognizedText,
    supportRecognition,
    setSupportRecognition,
    updateRecognizedText,
    working,
    setWorking,
    pauseAgentVoice,
    resumeAgentVoice,
    agentVoicePaused,
    setPlayerPaused
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useChatState,
  useVoiceChatState
});
