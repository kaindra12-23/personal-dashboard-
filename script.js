// RENDER WORKOUT - VERSI AMAN
const workoutDiv = document.getElementById('workout-plan');
if(workoutDiv) {
  workoutDiv.innerHTML = `
    <h2>Workout No Gym - Fase 1 MEI-JUNI</h2>
    <div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #334155">
      <h3 style="color:var(--accent);margin-bottom:6px">Senin</h3>
      <p style="font-size:14px">Push: Push up 3x15, Pike push up 3x10, Dips kursi 3x12</p>
    </div>
    <div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #334155">
      <h3 style="color:var(--accent);margin-bottom:6px">Selasa</h3>
      <p style="font-size:14px">Pull: Pull up/Negative 3x5, Row pake tas 3x15, Curl tas 3x15</p>
    </div>
    <div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #334155">
      <h3 style="color:var(--accent);margin-bottom:6px">Rabu</h3>
      <p style="font-size:14px">Legs: Squat 3x20, Split squat 3x12, Calf raise 3x25</p>
    </div>
    <p style="opacity:0.7;font-size:13px">Kamis-Sabtu: Pola sama. Minggu: Rest + Stretching</p>
  `;
}
