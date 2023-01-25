import { Modal } from "rsuite"

interface ErrorModalProps {
    error: string | undefined
    open: boolean
    onClose: () => void
}

export default function ErrorModal({ error, open, onClose }: ErrorModalProps) {
    return <Modal open={open} onClose={onClose}>
        <Modal.Header>
            <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "red" }}>{error}</Modal.Body>
    </Modal>
}