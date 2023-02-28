import React from 'react'
import { Logo, Back, Heart, Save, Add } from '../../Assets'

const ExcerciseEditior = () => {
  return (
    <center>

<div style={{width: "10px", height: "20px"}}></div>

<table width="1000" border="0" cellpadding="0" cellspacing="0">

<tr>

<td width="168" height="59" align="left" valign="bottom" bgcolor="#FFFFFF">
    <span class="style46">
        <img src={Logo} alt="" width="153" height="57" border="0" />
    </span>
</td>

<td width="832" height="59" align="center" valign="bottom" bgcolor="#FFFFFF">
    <div align="left"><span class="style46">
        <span class="style103">&nbsp;&nbsp;<span class="style110"><strong>Selected Exercise</strong></span>
        </span>
        <span class="style108"> __________________________________________&nbsp;</span></span>
    </div>
</td>
</tr>

<tr>

<td height="31" colspan="2" align="right" valign="top" bgcolor="#FFFFFF"><span class="style46">
  </span></td>
</tr>
</table>



<table width="1000" border="0" cellpadding="0" cellspacing="0">

<tr>

<td width="234" align="left" valign="top" bgcolor="#FFFFFF">

<img id="imgexc" src="https://media.hep2go.com/ex_images/000001-001000/219/image_000273.jpg?iid=4b9ce0600b9ab280a0b3f93ded67dad4" width="219" height="219" alt="" style={{border: "1px solid #9F9F9F"}} />
<div id="magDiv" style={{position: "absolute", display: "none", top: "0px", left: "0px"}}>

<img src="images/mag.png" alt="" border="0" title="Click to Enlarge" />
</div>
<div id="videoThumb" style={{position: "absolute", display: "none", top: "0px", left: "0px"}}>
<img src="images/video_attached.png" alt="" width="22" height="22" title="Play Video" />
</div>
</td>
<td width="378" align="left" valign="top" bgcolor="#FFFFFF">
<textarea id="f_description" name="f_description" class="style70" style={{width: "340px", height: "214px"}}>LOWER TRUNK ROTATIONS - LTR - WIG WAGS - KNEE ROCKS

Lying on your back with your knees bent, gently rotate your spine as you move your knees to the side and then reverse directions and move your knees to the other side. Repeat as you move through a comfortable range of motion.</textarea></td>
<td width="412" align="left" valign="top" bgcolor="#FFFFFF">
<table width="100%" border="0" cellpadding="0" cellspacing="0" style={{display: "table"}}>
<tr style={{display: "table-row"}}>
<td width="87" align="left" valign="middle" bgcolor="#FFFFFF">
<strong>  Reps</strong></td>
<td width="147" height="35" align="left" valign="middle" bgcolor="#FFFFFF">
<select id="f_repeats" name="f_repeats" class="style74" style={{width: "110px"}}>
<option value="-1">__________</option>
<option value="1" selected>1 Time</option>
<option value="2">2 Times</option>
<option value="3">3 Times</option>
<option value="4">4 Times</option>
<option value="5">5 Times</option>
<option value="6">6 Times</option>
<option value="7">7 Times</option>
<option value="8">8 Times</option>
<option value="9">9 Times</option>
<option value="10">10 Times</option>
<option value="11">11 Times</option>
<option value="12">12 Times</option>
<option value="13">13 Times</option>
<option value="14">14 Times</option>
<option value="15">15 Times</option>
<option value="16">16 Times</option>
<option value="17">17 Times</option>
<option value="18">18 Times</option>
<option value="19">19 Times</option>
<option value="20">20 Times</option>
<option value="21">21 Times</option>
<option value="22">22 Times</option>
<option value="23">23 Times</option>
<option value="24">24 Times</option>
<option value="25">25 Times</option>
<option value="26">26 Times</option>
<option value="27">27 Times</option>
<option value="28">28 Times</option>
<option value="29">29 Times</option>
<option value="30">30 Times</option>
<option value="31">31 Times</option>
<option value="32">32 Times</option>
<option value="33">33 Times</option>
<option value="34">34 Times</option>
<option value="35">35 Times</option>
<option value="36">36 Times</option>
<option value="37">37 Times</option>
<option value="38">38 Times</option>
<option value="39">39 Times</option>
<option value="40">40 Times</option>
<option value="41">41 Times</option>
<option value="42">42 Times</option>
<option value="43">43 Times</option>
<option value="44">44 Times</option>
<option value="45">45 Times</option>
<option value="46">46 Times</option>
<option value="47">47 Times</option>
<option value="48">48 Times</option>
<option value="49">49 Times</option>
<option value="50">50 Times</option>
</select>
</td>
<td width="170" align="left" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
</tr>

<tr style={{display: "table-row"}}>
<td height="35" align="left" valign="middle" bgcolor="#FFFFFF">
<strong>  Hold</strong></td>
<td align="left" valign="middle" bgcolor="#FFFFFF">
<select id="f_hold" name="f_hold" class="style74" style={{width: "110px;"}}>
<option value="-1">__________</option>
<option value="0">0 Seconds</option>
<option value="1" selected>1 Second</option>
<option value="2">2 Seconds</option>
<option value="3">3 Seconds</option>
<option value="4">4 Seconds</option>
<option value="5">5 Seconds</option>
<option value="6">6 Seconds</option>
<option value="7">7 Seconds</option>
<option value="8">8 Seconds</option>
<option value="9">9 Seconds</option>
<option value="10">10 Seconds</option>
<option value="11">11 Seconds</option>
<option value="12">12 Seconds</option>
<option value="13">13 Seconds</option>
<option value="14">14 Seconds</option>
<option value="15">15 Seconds</option>
<option value="20">20 Seconds</option>
<option value="25">25 Seconds</option>
<option value="30">30 Seconds</option>
<option value="35">35 Seconds</option>
<option value="45">45 Seconds</option>
<option value="60">1 Minute</option>
<option value="120">2 Minutes</option>
<option value="180">3 Minutes</option>
<option value="240">4 Minutes</option>
<option value="300">5 Minutes</option>
<option value="360">6 Minutes</option>
<option value="420">7 Minutes</option>
<option value="480">8 Minutes</option>
<option value="540">9 Minutes</option>
<option value="600">10 Minutes</option>
<option value="720">12 Minutes</option>
<option value="900">15 Minutes</option>
<option value="1200">20 Minutes</option>
<option value="1500">25 Minutes</option>
<option value="1800">30 Minutes</option>
</select>
</td>
<td align="left" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
</tr>

<tr style={{display: "none;"}}>
<td width="87" height="35" align="left" valign="middle" bgcolor="#FFFFFF">
<strong>  Duration</strong></td>
<td width="147" align="left" valign="middle" bgcolor="#FFFFFF">
<select id="f_duration" name="f_duration" class="style74" style={{width: "110px;"}}>
<option value="-1" selected>__________</option>
<option value="10">10 Seconds</option>
<option value="15">15 Seconds</option>
<option value="20">20 Seconds</option>
<option value="25">25 Seconds</option>
<option value="30">30 Seconds</option>
<option value="45">45 Seconds</option>
<option value="60">60 Seconds</option>
<option value="90">90 Seconds</option>
<option value="120">2 Minutes</option>
<option value="180">3 Minutes</option>
<option value="240">4 Minutes</option>
<option value="300">5 Minutes</option>
<option value="360">6 Minutes</option>
<option value="420">7 Minutes</option>
<option value="480">8 Minutes</option>
<option value="540">9 Minutes</option>
<option value="600">10 Minutes</option>
<option value="660">11 Minutes</option>
<option value="720">12 Minutes</option>
<option value="780">13 Minutes</option>
<option value="840">14 Minutes</option>
<option value="900">15 Minutes</option>
<option value="960">16 Minutes</option>
<option value="1020">17 Minutes</option>
<option value="1080">18 Minutes</option>
<option value="1140">19 Minutes</option>
<option value="1200">20 Minutes</option>
<option value="1500">25 Minutes</option>
<option value="1800">30 Minutes</option>
<option value="2400">40 Minutes</option>
<option value="2700">45 Minutes</option>
<option value="3600">60 Minutes</option>
<option value="4200">70 Minutes</option>
<option value="4800">80 Minutes</option>
<option value="5400">90 Minutes</option>
<option value="7200">2 Hours</option>
<option value="10800">3 Hours</option>
<option value="14400">4 Hours</option>
<option value="18000">5 Hours</option>
</select>
</td>
<td align="left" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
</tr>

<tr style={{display: "table-row"}}>
<td height="35" align="left" valign="middle" bgcolor="#FFFFFF">
<strong>  Complete</strong></td>
<td align="left" valign="middle" bgcolor="#FFFFFF">
<select id="f_complete" name="f_complete" class="style74" style={{width: "110px"}}>
<option value="-1">__________</option>
<option value="1" selected>1 Set</option>
<option value="2">2 Sets</option>
<option value="3">3 Sets</option>
<option value="4">4 Sets</option>
<option value="5">5 Sets</option>
<option value="6">6 Sets</option>
<option value="7">7 Sets</option>
<option value="8">8 Sets</option>
<option value="9">9 Sets</option>
<option value="10">10 Sets</option>
<option value="11">11 Sets</option>
<option value="12">12 Sets</option>
<option value="13">13 Sets</option>
<option value="14">14 Sets</option>
<option value="15">15 Sets</option>
<option value="16">16 Sets</option>
<option value="17">17 Sets</option>
<option value="18">18 Sets</option>
<option value="19">19 Sets</option>
<option value="20">20 Sets</option>
</select>
</td>
<td align="left" valign="middle" bgcolor="#FFFFFF">
<strong>Set(s)</strong></td>
</tr>
</table>

<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style={{display: "table"}}>
<tr style={{display: "table-row"}}>
<td width="89" height="35" align="left" valign="middle" bgcolor="#FFFFFF">
<strong>  Perform</strong></td>
<td width="118" align="left" valign="middle" bgcolor="#FFFFFF"><select id="f_perform" name="f_perform" class="style74" style={{width: "60px"}}>
<option value="-1">__________</option>
<option value="1" selected>1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
</select></td>
<td width="54" align="right" valign="middle" bgcolor="#FFFFFF">
Time(s)&nbsp;</td>
<td width="151" align="left" valign="middle" bgcolor="#FFFFFF">
<select id="f_times" name="f_times" class="style74" style={{width: "100px"}}>
<option value="a Day" selected>a Day</option>
<option value="a Week">a Week</option>
<option value="an Hour">an Hour</option>
<option value="">__________</option>
</select>
</td>
</tr>
</table>

<div style={{width: "100px", height: "10px", display: "table"}}></div>

<table width="100%" border="0" cellpadding="0" cellspacing="0" style={{display: "table"}}>
<tr>
<td width="77" height="70" align="left" valign="bottom" bgcolor="#FFFFFF">
<img src={Back} alt="" name="Image3" width="51" height="51" border="0" id="Image3" /><br />
&nbsp;&nbsp;Back</td>
<td width="77" align="center" valign="bottom" bgcolor="#FFFFFF">
<img src={Save} alt="" name="Image3" width="51" height="51" border="0" id="Image3" />
<br />
Save</td>
<td width="120" align="center" valign="bottom" bgcolor="#FFFFFF">
<img src={Heart} alt="" name="Image3" width="51" height="51" border="0" id="Image3" />
<br />
Add to Favorites</td>
<td width="100" align="center" valign="bottom" bgcolor="#FFFFFF">
<img src={Add} alt="" name="Image3" width="94" height="49" border="0" id="Image3" />
<br />
Add To HEP</td>
<td width="32" align="center" valign="bottom" bgcolor="#FFFFFF">&nbsp;</td>
</tr>
</table>

</td>
</tr>
</table>
<table width="1000" border="0" cellpadding="0" cellspacing="0">
<tr>
<td width="220" height="43" align="left" valign="top" bgcolor="#FFFFFF" style={{paddingLeft: "12px"}}>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td align="left" valign="top" bgcolor="#FFFFFF" style={{paddingTop: "15px"}}>
<strong>4.3M</strong> Sent
</td>
</tr>
<tr>
<td align="left" valign="top" bgcolor="#FFFFFF" style={{paddingTop: "15px"}}>
Created - Jan 10th, 2011</td>
</tr>
</table>
</td>
<td align="left" valign="top" bgcolor="#FFFFFF" background="#999999">
&nbsp;</td>
</tr>
</table>

<table width="1000" border="0" cellpadding="0" cellspacing="0">
<tr>
<td height="14" align="left" valign="middle" bgcolor="#FFFFFF"><span class="style108">_______________________________________________________________________</span></td>
</tr>
<tr>
<td height="50" align="center" valign="middle" bgcolor="#FFFFFF">
<span class="style107">Copyright &copy; 2023 HEP2go Inc.</span><span class="style58"></span></td>
</tr>
</table>
</center>
  )
}

export default ExcerciseEditior