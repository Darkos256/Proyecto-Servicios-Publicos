import { Modal, Alert, Button } from "react-bootstrap"
import useAuth from "../../Components/Auth/useAuth"

export default function DeleteModal({isOpen, Close}) {

    const {logout} = useAuth();

    const hadleDelete = () =>{
        //
        //close()
        logout();
    }

    return (
        <Modal show={isOpen} onHide={Close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">
                    ¿Estas seguro que desea eliminar esta cuenta?
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={Close}>Cancelar</Button>
                <Button variant="danger" onClick={hadleDelete}>Elimar cuenta</Button>
            </Modal.Footer>
        </Modal>
    )
}
