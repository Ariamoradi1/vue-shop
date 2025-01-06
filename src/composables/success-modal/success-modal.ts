import { Modal } from "ant-design-vue";
import type { SuccessDialogOptions } from "@/model/success-modal/success-modal.model";

export const useModal = () => {
  const showSuccessDialog = ({
    title,
    content,
    duration,
  }: SuccessDialogOptions) => {
    let secondsToGo = duration;
    const modal = Modal.success({
      title,
      content,
    });

    const interval = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      modal.destroy();
    }, secondsToGo * 1000);
  };

  return {
    showSuccessDialog,
  };
};
