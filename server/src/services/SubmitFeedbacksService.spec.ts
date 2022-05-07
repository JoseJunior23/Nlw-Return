import { SubmitFeedbackService } from './SubmitFeedbackService';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Exemple comment',
        screenshot: 'data:image/png;base64,hdfuhufcjudgjvufjgu',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'Exemple comment',
        screenshot: 'data:image/png;base64,hdfuhufcjudgjvufjgu',
      })
    ).rejects.toThrow();
  });

  it('should not be able to feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,hdfuhufcjudgjvufjgu',
      })
    ).rejects.toThrow();
  });

  it('should not be able to feedback with an invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'test.jpg',
      })
    ).rejects.toThrow();
  });
});
