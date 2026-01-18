export type ModalProps<T = {}> = T & {
    isOpen: boolean;
    onClose: () => void;
}
