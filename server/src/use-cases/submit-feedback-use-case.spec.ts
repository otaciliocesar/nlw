import exp from "constants";
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const creatFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedBack = new SubmitFeedbackUseCase(
    { create: creatFeedbackSpy },
    { sendMail: sendMailSpy }   
   )

describe('Submit feedback', () => {
   it('should be able to submit a feedback', async () => {
    const submitFeedBack = new SubmitFeedbackUseCase(
     { create: async () => {} },
     { sendMail: async () => {} }   
    )

   await expect(submitFeedBack.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,uisaohduisahduisah',
    })).resolves.not.toThrow();

        expect(creatFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
   });

   it('should be not able to submit feedback without type', async () => {  
   await expect(submitFeedBack.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,uisaohduisahduisah',
    })).resolves.toThrow();
   });
   it('should be not able to submit feedback without comment', async () => {  
    await expect(submitFeedBack.execute({
         type: 'BUG',
         comment: '',
         screenshot: 'data:image/png;base64,uisaohduisahduisah',
     })).resolves.toThrow();
    });
    it('should be not able to submit feedback without invalid screenshot', async () => {  
        await expect(submitFeedBack.execute({
             type: 'BUG',
             comment: 'comment',
             screenshot: 'test.jpg',
         })).resolves.toThrow();
        });
});