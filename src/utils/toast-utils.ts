import { toast } from "@/hooks/use-toast";

class ToastUtil {
  public success(
    message: string,
    showTitle: boolean = true,
    title: string = "Sucesso"
  ): void {
    this.toast(message, showTitle ? title : "", "success");
  }

  public error(
    message: string,
    showTitle: boolean = true,
    title: string = "Ocorreu um erro"
  ): void {
    this.toast(message, showTitle ? title : "", "destructive");
  }

  private toast(
    message: string,
    title: string = "",
    variant: "success" | "destructive",
    duration: number = 2000
  ): void {
    toast({
      variant,
      title: title && title,
      description: message,
      duration,
    });
  }
}

export const toastUtil = new ToastUtil();
