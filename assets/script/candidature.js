/* Masque la partie des antécédent force de l'ordre */
document.getElementById("force_suite").style.display = "none";
function change_force()
{
  if (document.getElementById("faction").value == 0)
  {
    document.getElementById("force_suite").style.display = "none";
  }
  else
  {
    document.getElementById("force_suite").style.display = "grid";
  }
}

/* Masque la partie des dispo école */
function visibility_1()
{
  if (document.getElementById("time_school").value == 0)
  {
    document.getElementById("dispo_1").style.display = "none";
  }
  else
  {
    document.getElementById("dispo_1").style.display = "block";
  }
}

/* Masque la partie des dispo vacance */
function visibility_2()
{
  if (document.getElementById("time_vacances").value == 0)
  {
    document.getElementById("dispo_2").style.display = "none";
  }
  else
  {
    document.getElementById("dispo_2").style.display = "block";
  }
}

/* Masque la partie des dispo travail */
function visibility_3()
{
  if (document.getElementById("time_work").value == 0)
  {
    document.getElementById("dispo_3").style.display = "none";
  }
  else
  {
    document.getElementById("dispo_3").style.display = "block";
  }
}
