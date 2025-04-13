import bcrypt from "bcryptjs";

const testPassword = "1234"; // Contraseña original
const testHash = "$2a$10$4dCLLFrMYm90oqNUUElyrOY8D7Ziywl9ZrLuScM.S8Ow0PYvsmr2C"; // Hash proporcionado

(async () => {
  const isValid = await bcrypt.compare(testPassword, testHash);
  console.log("¿La contraseña coincide con el hash?:", isValid);
})();
