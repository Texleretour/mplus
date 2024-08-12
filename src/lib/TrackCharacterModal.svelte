<div class="modal-box">
	<form method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 focus:outline-none"
			>✕</button
		>
	</form>
	<h3 class="text-lg font-bold pb-8">Tracker un personnage</h3>
	<form method="POST" class="flex flex-col gap-4">
		<label class="input input-bordered flex items-center gap-2">
			Nom
			<input name="name" type="text" class="grow" placeholder="Putarhq" />
		</label>

		<label class="input input-bordered flex items-center gap-2">
			Royaume
			<input name="realm" type="text" class="grow" placeholder="Rashgarroth" />
		</label>

		<div class="flex flex-col w-full items-end gap-2">
			<p class="italic">L'ajout d'un personnage peut prendre plusieurs heures.</p>
			<div class="w-full flex justify-end items-center gap-2">
				<button class="btn btn-accent">Tracker</button>
			</div>
		</div>
	</form>
</div>
