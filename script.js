document.getElementById('userForm').addEventListener('submit', async function (event) {
    event.preventDefault();


    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('password').value,
        foto: document.getElementById('foto').value,
        tipoPerfil: {
            tipo: document.getElementById('tipo').value,
            nivelAcesso: document.getElementById('nivelAcesso').value
        },
        lstAddresses: [
            {
                street: document.getElementById('street').value,
                number: document.getElementById('number').value,
                complement: document.getElementById('complement').value,
                district: document.getElementById('district').value,
                neighborhood: document.getElementById('neighborhood').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                country: document.getElementById('country').value,
                zipCode: document.getElementById('zipCode').value,
            }
        ],
        unidade: null
    };


    try {
        const response = await fetch('https://scholarspace-254954748843.southamerica-east1.run.app/api/User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }

        const result = await response.json();
        console.log('Dados enviados com sucesso:', result);
        alert('Cadastro realizado com sucesso!');
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao cadastrar. Tente novamente.');
    }
});
