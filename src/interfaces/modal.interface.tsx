export interface IModal{
    isOpen: boolean,
    closeModal: () => void,
    children: () => JSX.Element
}