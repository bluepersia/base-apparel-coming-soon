document.querySelector ('.cmp__form').addEventListener ('submit', handleFormSubmit);

const emailInput = document.getElementById ('cmp__email');

function handleFormSubmit (e)
{
    e.preventDefault ();

    emailInput.classList.remove ('invalid');

    const emailVal = emailInput.querySelector ('.cmp__input').value;

    if (!isEmail (emailVal))
    {
        emailInput.classList.add ('invalid');
        return;
    }
}

function isEmail (val) 
{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test (val);
}