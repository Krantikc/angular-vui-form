import { TestBed } from '@angular/core/testing';

import { VuiVoiceRecognitionService } from './vui-voice-recognition.service';

describe('VuiVoiceRecognitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VuiVoiceRecognitionService = TestBed.get(VuiVoiceRecognitionService);
    expect(service).toBeTruthy();
  });
});
