const cuenta = document.getElementById('cuenta').value;
const propina = document.getElementById('propina').value;
const total = parseFloat(cuenta) + (parseFloat(cuenta) * (parseFloat(propina) / 100));
document.getElementById('total').textContent = `Total a pagar: $${total.toFixed(2)}`;

print(total);