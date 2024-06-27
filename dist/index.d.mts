import * as _scoopika_types from '@scoopika/types';
import { AgentRunHistory, RunHistory, RunInputs, RunOptions, Hooks } from '@scoopika/types';
import { Client, Agent, VoiceRecorder, RunAudioPlayer, VoiceVisualizer } from '@scoopika/client';
import * as react from 'react';

interface UseChatStateOptions {
    session_id?: string;
    agent_name?: string;
    scroll?: () => any;
}
declare function useChatState(client: Client, agent: string | Agent, state_options?: UseChatStateOptions): {
    generating: boolean;
    loading: boolean;
    status: string | undefined;
    streamPlaceholder: AgentRunHistory | undefined;
    messages: RunHistory[];
    newRequest: ({ inputs, options, hooks, }?: {
        inputs?: RunInputs;
        options?: RunOptions;
        hooks?: Hooks;
    }) => Promise<_scoopika_types.AgentResponse | undefined>;
    agent: Agent;
    session: string;
    changeSession: (session?: string) => Promise<void>;
    loadingSession: boolean;
};

interface UseVoiceChatStateOptions extends UseChatStateOptions {
    auto_play_audio?: boolean;
    agent_voice?: {
        audio: HTMLAudioElement | string;
        canvas?: HTMLCanvasElement | string;
        wave_color?: string;
    };
}
declare function useVoiceChatState(client: Client, agent: Agent, state_options?: UseVoiceChatStateOptions): {
    voiceRecorder: VoiceRecorder | null;
    setVoiceRecorder: react.Dispatch<react.SetStateAction<VoiceRecorder | null>>;
    voicePlaying: boolean;
    setVoicePlaying: react.Dispatch<react.SetStateAction<boolean>>;
    agentVoicePlayer: RunAudioPlayer | null;
    setAgentVoicePlayer: react.Dispatch<react.SetStateAction<RunAudioPlayer | null>>;
    newRequest: ({ inputs, options, hooks, }?: {
        inputs?: RunInputs;
        options?: RunOptions;
        hooks?: Hooks;
    }) => Promise<_scoopika_types.AgentResponse | undefined>;
    visualizer: VoiceVisualizer | null;
    setVisualizer: react.Dispatch<react.SetStateAction<VoiceVisualizer | null>>;
    recorderState: "recording" | "paused" | "stopped";
    setRecorderState: react.Dispatch<react.SetStateAction<"recording" | "paused" | "stopped">>;
    recognizedText: string | undefined;
    setRecognizedText: react.Dispatch<react.SetStateAction<string | undefined>>;
    supportRecognition: boolean | null;
    setSupportRecognition: react.Dispatch<react.SetStateAction<boolean | null>>;
    updateRecognizedText: (text: string) => void;
    working: boolean;
    setWorking: react.Dispatch<react.SetStateAction<boolean>>;
    pauseAgentVoice: () => void;
    resumeAgentVoice: () => void;
    agentVoicePaused: boolean;
    setPlayerPaused: react.Dispatch<react.SetStateAction<boolean>>;
    generating: boolean;
    loading: boolean;
    status: string | undefined;
    streamPlaceholder: _scoopika_types.AgentRunHistory | undefined;
    messages: _scoopika_types.RunHistory[];
    agent: Agent;
    session: string;
    changeSession: (session?: string | undefined) => Promise<void>;
    loadingSession: boolean;
};

export { type UseChatStateOptions, type UseVoiceChatStateOptions, useChatState, useVoiceChatState };
