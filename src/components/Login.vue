<template>
<div>
	<div class="row">
		<form>
			<div class="col s12 m8 l4 offset-m2 offset-l4">
				<div class="card">
					<div class="card-content">
						<div class="input-field">
							<label for="username">Nombre</label>
							<input type="text" class="validate" required>
						</div>
						<div class="input-field">
							<label for="username">Usuario</label>
							<input type="password" class="validate" required>
						</div>
						<div class="form-field">
							<button type="submit" class="btn-large waves-effect waves-dark" style="width:100%;">Entrar</button>
						</div><br>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
</template>
<script>
  export default {
      name: "Login",
      beforeCreate: function() {
       document.body.className = 'login';
      }
   }
</script>
