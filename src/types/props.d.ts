export type ModalProps<T = object> = T & {
    isOpen: boolean;
    onClose: () => void;
}
