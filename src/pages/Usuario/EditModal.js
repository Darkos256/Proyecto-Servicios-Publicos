import { useEffect } from 'react';
import { Modal, Form, Alert, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import Roles from '../../Components/helpers/Roles';
import useAuth from '../../Components/Auth/useAuth';
import editAccountResolver from '../../Components/Validations/editAccountResolver';

export default function EditModal({ isOpen, Close, user }) {
	const { register, handleSubmit, formState: { errors, dirtyFields }, reset } = useForm({ resolver: editAccountResolver });
	const { updateUser, roles } = useAuth()

	const isDirty = !!Object.keys(dirtyFields).length; 

	const onSubmit = (formData) => {
		if(!isDirty) return;

		let newUserData;
		if(formData.roles) {
			newUserData = formData;
		} else {
			const { role, ...resFormData} = formData;
			newUserData = resFormData;
		}

		updateUser(newUserData)
		Close()
	}

	useEffect(() => {
		if(!isOpen) {
			reset()
		}
	}, [isOpen, reset])

	useEffect(() => {
		if(user) reset({
			name: user.name,
			email: user.email,
			role: user.roles
		});
	}, [user, reset])

	return (
		<Modal show={isOpen} onHide={Close}>
			<Modal.Header closeButton>
				<Modal.Title>Editar mi cuenta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Nombre</Form.Label>
						<Form.Control 
							type="text"
							placeholder="Escribe un nombre"
							{...register("name")}
						/>
						{errors?.name && (
							<Form.Text>
							<Alert variant="danger">
								{errors.name.message}
							</Alert>
						</Form.Text>
							)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control 
							type="email"
							placeholder="Escribe un correo electrónico"
							{...register("email")}
						/>
						{errors?.email && (
							<Form.Text>
							<Alert variant="danger">
								{errors.email.message}
							</Alert>
						</Form.Text>
							)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Rol</Form.Label>
						<Form.Control 
							as="select"
							disabled={!roles('Admin')}
							{...register("role")}
						>
							{Object.keys(Roles).map(role => (
								<option key={role}>{role}</option>
							))}
						</Form.Control>
						{errors?.role && (
							<Form.Text>
							<Alert variant="danger">
								{errors.role.message}
							</Alert>
						</Form.Text>
							)}
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={Close}>
					Cancelar
				</Button>
				<Button variant="primary" onClick={handleSubmit(onSubmit)}
					disabled={!isDirty}
				>
					Actualizar mi cuenta
				</Button>
			</Modal.Footer>
		</Modal>
	);
}