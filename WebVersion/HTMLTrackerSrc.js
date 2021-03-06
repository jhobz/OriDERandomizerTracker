var mapstone_count_T1 = 0;
var mapstone_count_T2 = 0;
var SkillList = ["SpiritFlame", "WallJump", "ChargeFlame", "DoubleJump", "Bash", "Stomp", "Glide", "Climb", "ChargeJump", "LightGrenade", "Dash"];
var KeyList = ["WaterVein", "GumonSeal", "Sunstone"];
var EventList = ["CleanWater", "WindRestored"];

function clearCheckBoxes(doc) {
  var list_cb = doc.getElementsByClassName("checkbox");
  for (i = 0; i < list_cb.length; i++) {
    list_cb[i].checked = false;
  }
}

function changeMapstone(doc, text) {
  if (text == 'T1+') {
    if (mapstone_count_T1 < 9) {
      mapstone_count_T1++;
    }
  } else if (text == 'T1-') {
    if (mapstone_count_T1 > 0) {
      mapstone_count_T1--;
    }
  } else if (text == 'T2+') {
    if (mapstone_count_T2 < 9) {
      mapstone_count_T2++;
    }
  } else if (text == 'T2-') {
    if (mapstone_count_T2 > 0) {
      mapstone_count_T2--;
    }
  }
  doc.getElementById('mapstoneTextT1').innerText = mapstone_count_T1 + '/9';
  doc.getElementById('mapstoneTextT2').innerText = mapstone_count_T2 + '/9';
}

function toggleCheckbox(doc, element) {
  redrawGraphics(doc);
}

function redrawGraphics(doc) {
  var cb_event = doc.getElementsByClassName("event-checkbox");
  var cb_skill = doc.getElementsByClassName("skill-checkbox");
  var cb_tree = doc.getElementsByClassName("tree-checkbox");
  var cb_key = doc.getElementsByClassName("key-checkbox");
  var cb_shard = doc.getElementsByClassName("shard-checkbox");
  for (i = 0; i < cb_skill.length; i++) {
    var str = 'skill-' + cb_skill[i].title;
    setVisibility(doc, str, cb_skill[i].checked);
  }
  for (i = 0; i < cb_tree.length; i++) {
    var str = 'tree-' + cb_tree[i].title;
    setVisibility(doc, str, cb_tree[i].checked);
  }
  for (i = 0; i < cb_shard.length; i++) {
    var str = 'shard-' + cb_shard[i].title;
    setVisibility(doc, str, cb_shard[i].checked);
  }
  for (i = 0; i < cb_event.length; i++) {
    var str = 'event-' + cb_event[i].title;
    setVisibility(doc, str, cb_event[i].checked);
    str = 'event-G' + cb_event[i].title;
    setVisibility(doc, str, !cb_event[i].checked);
  }
  for (i = 0; i < cb_key.length; i++) {
    var str = 'key-' + cb_key[i].title;
    setVisibility(doc, str, cb_key[i].checked);
    str = 'key-G' + cb_key[i].title;
    setVisibility(doc, str, !cb_key[i].checked);
  }
}

function setVisibility(doc, id, vis) {
  var el = doc.getElementById(id);
  if (vis) {
    el.style.visibility = "visible";
  } else {
    el.style.visibility = "hidden";
  }
}

function startAll(doc) {
  clearCheckBoxes(doc);
  redrawGraphics(doc);
}
