import { useGlobalStore } from "@/lib/use-global-store";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";

const AlertDialogProvider = () => {
  const { alertConfig, alertOpen, updateAlertOpen } = useGlobalStore();

  if (!alertOpen) return null;

  const handleConfirm = () => {
    if (alertConfig?.onConfirm) {
      alertConfig.onConfirm();
    }
    updateAlertOpen(false);
  };

  const handleCancel = () => {
    if (alertConfig?.onCancel) {
      alertConfig.onCancel();
    }
    updateAlertOpen(false);
  };

  return (
    <AlertDialog open={alertOpen} onOpenChange={updateAlertOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {alertConfig?.title || "Confirmation Required"}
          </AlertDialogTitle>
          {alertConfig?.description ||
            "Are you sure? This action cannot be undone."}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>
            {alertConfig?.cancelLabel || "Cancel"}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            {alertConfig?.confirmLabel || "Confirm"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { AlertDialogProvider };
