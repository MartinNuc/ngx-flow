import { FlowFile } from './flow/flow-file';

export interface Transfer {
  id: string;
  name: string;
  flowFile: FlowFile;
  progress: number;
  error: boolean;
  paused: boolean;
  success: boolean;
  complete: boolean;
  currentSpeed: number;
  averageSpeed: number;
  size: number;
  timeRemaining: number;
}
