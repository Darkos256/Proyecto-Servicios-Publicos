import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useAuth from '../../Components/Auth/useAuth';
import DeleteModal from './DeleteModal';
import ChangePasswordModal from './ChangePasswordModal';
import useModal from '../../Components/Hooks/useModal';
import EditModal from './EditModal';
import imgProfile from '../../assets/male_avatar.svg';

export default function Usuario() {
    const { user } = useAuth();

    const [isOpenDeleteModal, OpenDeleteModal, CloseDeleteModal] = useModal();
    const [isOpenChangePasswordModal, OpenChangePasswordModal, CloseChangePasswordModal] = useModal();
    const [isOpenEditModal, OpenEditModal, CloseEditModal] = useModal();

    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col xs={12} className="text-center">
                        <img
                            src={imgProfile}
                            alt="profile"
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                    </Col>
                    <Col className='mt-4' >
                        <Card style={{ maxWidth: '360px' }} className='mx-auto p-4'>
                            <p className='text-center'><b>Nombre: </b>{user.name}</p>
                            <p className='text-center'><b>Email: </b>{user.email}</p>
                            <p className='text-center'><b>Rol: </b>{user.roles}</p>

                            <Button variant='warning' onClick={OpenEditModal}>Editar cuenta</Button>
                            <Button variant='link' className='mt-1' onClick={OpenChangePasswordModal}>Cambiar contraseña</Button>
                            <Button variant='link' className='mt-3 text-danger' onClick={OpenDeleteModal}>Eliminar cuenta</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <DeleteModal
                isOpen={isOpenDeleteModal}
                Close={CloseDeleteModal}
            />
            <ChangePasswordModal
                isOpen={isOpenChangePasswordModal}
                Close={CloseChangePasswordModal}
            />
            <EditModal 
            isOpen={isOpenEditModal}
            Close={CloseEditModal}
            user={user}
        />
        </>
    )
}
