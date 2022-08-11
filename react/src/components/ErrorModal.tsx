import { Modal } from "rsuite"

export default function ErrorModal(props: { error: string | undefined, open: boolean, onClose: () => void }) {
    let { error, open, onClose } = props
    return <Modal open={open} onClose={onClose}>
        <Modal.Header>
            <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "red" }}>{error}</Modal.Body>
    </Modal>
}