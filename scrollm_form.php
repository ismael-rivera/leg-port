				<section class="demo">
					<form class="move">
						<fieldset id="options">
							<legend>Options</legend>
							<div title="default: 0">
								<label for="duration">duration</label>
								<div class="slider liveupdate"></div>
								<input type="text" id="duration" size="3" value="" min="0" max="600" step="1">
							</div>
							<div title="default: 0">
								<label for="offset">offset</label>
								<div class="slider liveupdate"></div>
								<input type="text" id="offset" size="3" value="" min="-300" max="300" step="1">
							</div>
							<div title="default: null">
								<label for="triggerElement">triggerElement</label>
								<input type="text" id="triggerElement" value="">
								<button name="triggerElement" value="0">update</button>
							</div>
							<div title="default: &quot;onCenter&quot; == 0.5">
								<label for="triggerHook">triggerHook</label>
								<div class="slider liveupdate"></div>
								<input type="text" id="triggerHook" size="3" value="" min="0" max="1" step="0.01">
							</div>
							<div title="default: &quot;onCenter&quot; == 0.5">
								<label></label>
								<button name="triggerHook" value="0">onLeave</button>
								<button name="triggerHook" value="0.5">onCenter</button>
								<button name="triggerHook" value="1">onEnter</button>
							</div>
							<div title="default: true">
								<label for="reverse">reverse</label>
								<input type="checkbox" id="reverse" value="1">
							</div>
							<div title="default: false">
								<label for="tweenChanges">tweenChanges</label>
								<input type="checkbox" id="tweenChanges" value="1">
							</div>
						</fieldset>
						<fieldset id="actions">
							<legend>Actions</legend>
							<div>
								<label for="enabled">Scene enabled</label>
								<input type="checkbox" id="enabled" value="1" checked>
							</div>
							<div>
								<label for="tween">do tween</label>
								<input type="checkbox" id="tween" value="1" checked>
							</div>
							<div>
								<label for="pin">do pin</label>
								<input type="checkbox" id="pin" value="1" checked>
							</div>
						</fieldset>
					</form>
					<div class="spacer s2"></div>
					<div id="trigger" class="spacer s0"></div>
					<div id="target" class="box1 blue">
						<p>I feel dizzy.</p>
						<a href="#" class="viewsource">view source</a>
					</div>
					<div class="spacer s3"></div>
					<script>
						
					</script>
				</section>
				<div class="spacer s_viewport"></div>


