var keysBlockMid = document.querySelector(".keysBlockMid"),
	keyboard = document.querySelector(".keyboard"),
	keys = document.querySelector(".keys"),
	keysLineTop = document.querySelectorAll(".keysLineTop"),
	keysLineStd = document.querySelectorAll(".keysLineStd"),
	keysLineStdLast = document.querySelector(".keysLineStdLast"),
	keysLineArrow = document.querySelector(".keysLineArrow"),
	keyTop = document.querySelectorAll(".keyTop"),
	key = document.querySelectorAll(".key"),
	keyBottom = document.querySelectorAll(".keyBottom"),
	keyCircles = document.querySelectorAll(".keyCircle"),
	keyCircleLong = document.querySelectorAll(".keyCircleLong");

var escKey = document.querySelector("#esc"),
	tabKey = document.querySelector("#tab"),
	capLockKey = document.querySelector("#capLock"),
	shiftLeftKey = document.querySelector("#shiftLeft"),
	ctrlKey = document.querySelector("#ctrl"),
	optionLeftKey = document.querySelector("#optionLeft"),
	cmdLeftKey = document.querySelector("#cmdLeft"),
	lockKey = document.querySelector("#lock"),
	equalKey = document.querySelector("#equal"),
	cmdRightKey = document.querySelector("#cmdRight"),
	functionKey = document.querySelector("#function"),
	optionRightKey = document.querySelector("#optionRight"),
	zeroKey = document.querySelector("#zero"),
	plusKey = document.querySelector("#plus"),
	backSpaceKey = document.querySelector("#backSpace"),
	pipeKey = document.querySelector("#pipe"),
	spaceKey = document.querySelector("#space"),
	shiftRightKey = document.querySelector("#shiftRight"),
	escKey = document.querySelector("#esc");

function initSize(sizeRatio)
{
	var keyTopHeight = sizeRatio * 42,
		lineMargin = sizeRatio * 6,
		keyWidth = sizeRatio * 55,
		keyMargin = sizeRatio * 3,
		keyRadius = sizeRatio * 5,
		keyCircleWidth = sizeRatio * 50;
	// window.alert(keyWidth);

	keyboard.style.borderRadius = sizeRatio * 40 + "px";
	keys.style.margin = sizeRatio * 18 + "px";
	keysBlockMid.style.margin = "0 " + sizeRatio * 9 + "px";
	for (var i = 0; keysLineTop[i]; i++)
	{
		keysLineTop[i].style.height = keyTopHeight + "px";
		keysLineTop[i].style.margin = lineMargin + "px 0";
	}
	for (var i = 0; keysLineStd[i]; i++)
	{
		keysLineStd[i].style.height = keyWidth + "px";
		keysLineStd[i].style.margin = lineMargin  + "px 0";
	}
	keysLineStdLast.style.margin = keyMargin + "px 0 " + lineMargin + "px 0";
	keysLineArrow.style.margin = lineMargin + "px 0 ";
	for (var i = 0; keyTop[i]; i++)
	{
		keyTop[i].style.width = keyWidth + "px";
		keyTop[i].style.height = keyTopHeight + "px";
		keyTop[i].style.margin = "0 " + keyMargin + "px";
		keyTop[i].style.borderRadius = sizeRatio * 7  + "px";
		// keyTop[i].style.border = "solid " + sizeRatio * 2 + "px rgb(35, 35, 35)";

		keyTop[i].style.borderImage = "linear-gradient(to top right, #20222494, #84878b57) 1";
		keyTop[i].style.borderStyle = "solid";
		keyTop[i].style.borderWidth = sizeRatio * 2 + "px";

		keyTop[i].addEventListener("mouseover", mouseOverKeys);
		keyTop[i].addEventListener("mouseout", mouseOutKeys);
	}
	for (var i = 0; key[i]; i++)
	{
		console.log(keyWidth);
		key[i].style.width = keyWidth + "px";
		key[i].style.height = keyWidth + "px";
		key[i].style.margin = "0 " + keyMargin + "px";
		key[i].style.borderRadius = keyRadius + "px";
		// key[i].style.border = "solid " + sizeRatio * 2 + "px rgb(35, 35, 35)";

    	key[i].style.borderImage = "linear-gradient(to top right, #20222494, #84878b57) 1";
		key[i].style.borderStyle = "solid";
		key[i].style.borderWidth = sizeRatio * 2 + "px";

		key[i].addEventListener("mouseover", mouseOverKeys);
		key[i].addEventListener("mouseout", mouseOutKeys);
	}
	for (var i = 0; keyBottom[i]; i++)
	{
		keyBottom[i].style.width = keyWidth + "px";
		keyBottom[i].style.height = keyWidth + "px";
		keyBottom[i].style.margin = "0 " + keyMargin + "px";
		keyBottom[i].style.borderRadius = keyRadius + "px";
		// keyBottom[i].style.border = "solid " + sizeRatio * 2 + "px rgb(35, 35, 35)";

    	keyBottom[i].style.borderImage = "linear-gradient(to top right, #20222494, #84878b57) 1";
		keyBottom[i].style.borderStyle = "solid";
		keyBottom[i].style.borderWidth = sizeRatio * 2 + "px";

		keyBottom[i].addEventListener("mouseover", mouseOverKeys);
		keyBottom[i].addEventListener("mouseout", mouseOutKeys);
	}
	for (var i = 0; keyCircles[i]; i++)
	{
		// keyCircles[i].style.width = keyCircleWidth + "px";
		keyCircles[i].style.height = keyCircleWidth + "px";
		// keyCircles[i].style.height = "100%";
		keyCircles[i].style.flex = "1";
		keyCircles[i].style.margin = (keyWidth - keyCircleWidth) / 2 + "px";
		keyCircles[i].style.fontSize = sizeRatio * 23 + "px";
		// key[i].style.margin = "0 " + keyMargin + "px";
		// key[i].style.borderRadius = keyRadius + "px";
		// key[i].style.border = "solid " + sizeRatio * 2 + "px rgb(30, 30, 30)";
	}
	for (var i = 0; keyCircleLong[i]; i++)
	{
		// keyCircles[i].style.width = keyCircleWidth + "px";
		keyCircleLong[i].style.height = (keyCircleWidth * 2 + keyMargin * 3) + "px";
		keyCircleLong[i].style.flex = "1";
		keyCircleLong[i].style.margin = (keyWidth - keyCircleWidth) / 2 + "px";
		// keyCircleLong[i].style.fontSize = sizeRatio * 23 + "px";
	}
}

function initSpecialSize(sizeRatio) {
	var angleRadius = sizeRatio * 25;
	escKey.style.width = sizeRatio * 101 + "px";
	tabKey.style.width = sizeRatio * 86 + "px";
	capLockKey.style.width = sizeRatio * 101 + "px";
	shiftLeftKey.style.width = sizeRatio * 72 + "px";
	
	// borderRadius
	escKey.style.borderTopLeftRadius = angleRadius + "px";
	ctrlKey.style.borderBottomLeftRadius = angleRadius + "px";
	lockKey.style.borderTopRightRadius = angleRadius + "px";
	equalKey.style.borderBottomRightRadius = angleRadius + "px";
	
	ctrlKey.style.width = sizeRatio * 82 + "px";
	optionLeftKey.style.width = sizeRatio * 76 + "px";
	cmdLeftKey.style.width = sizeRatio * 82 + "px";
	cmdRightKey.style.width = sizeRatio * 82 + "px";
	// spaceKey.style.width = sizeRatio * 370 + "px";
	functionKey.style.width = sizeRatio * 82 + "px";
	optionRightKey.style.width = sizeRatio * 76 + "px";

	zeroKey.style.width = sizeRatio * 124 + "px";
	plusKey.style.height = sizeRatio * 124 + "px";
	equalKey.style.height = sizeRatio * 124 + "px";
	
	// special key setup to use all space remaining
	backSpaceKey.style.flex = "1";
	pipeKey.style.flex = "1";
	// enterKey.style.flex = "1";
	spaceKey.style.flex = "1";
	shiftRightKey.style.flex = "1";
	// optionRightKey.style.flex = "1";
}

// background-image
keyBack = "radial-gradient(ellipse at left, #292c2ebe, transparent), radial-gradient(ellipse at bottom left, #20222494, transparent), radial-gradient(circle at bottom, #2c2d30, transparent), radial-gradient(circle at top, #585b6169, #2c2d30)"
circleBack = "radial-gradient(ellipse at right, #292c2ea8, transparent), radial-gradient(ellipse at top right, #17181a, transparent), radial-gradient(circle at center, #6c6e72a8, transparent), radial-gradient(circle at bottom left, #9b9ea82c, transparent)";
keyHover = "radial-gradient(ellipse at left, #222527be, transparent), radial-gradient(ellipse at bottom left, #22242794, transparent), radial-gradient(circle at top right, #2c2c30d7, transparent), radial-gradient(circle at bottom right, #1e2022be, transparent)";
circleHover = "radial-gradient(ellipse at right, #1b1d1fa8, transparent), radial-gradient(ellipse at top right, #181a1b, transparent), radial-gradient(circle at center, #535558a8, transparent), radial-gradient(circle at bottom left, #7a7c832c, transparent)";

var pathImg = "css/imgKeyboard/";

function initTexture() {

	for (var i = 0; keyTop[i]; i++)
	{
		var tmpUrl = pathImg + i + "_keyTop.png";

		keyTop[i].style.backgroundImage = "url(\"" + tmpUrl + "\"), " + keyBack;
		keyTop[i].style.backgroundSize = "cover";
		keyTop[i].style.backgroundRepeat = "no-repeat";
		keyTop[i].style.backgroundPosition = "center center";
	}
	
	for (var i = 0; key[i]; i++)
	{
		var tmpUrl = pathImg + i + "_key.png";
		var tmpChild = key[i].firstChild;

		key[i].style.backgroundImage = keyBack;
		if (tmpChild)
		{
			tmpChild.style.backgroundImage = "url(\"" + tmpUrl + "\"), " + circleBack;
			tmpChild.style.backgroundSize = "cover";
			tmpChild.style.backgroundRepeat = "no-repeat";
			tmpChild.style.backgroundPosition = "center center";
		}
	}
	
	for (var i = 0; keyBottom[i]; i++)
	{
		var tmpUrl = pathImg + i + "_keyBottom.png";
		
		keyBottom[i].style.backgroundSize = "cover";
		keyBottom[i].style.backgroundRepeat = "no-repeat";
		keyBottom[i].style.backgroundPosition = "center center";
		if (i == 3)
			keyBottom[i].style.backgroundImage = keyBack;
		else
			keyBottom[i].style.backgroundImage = "url(\"" + tmpUrl + "\"), " + keyBack;

	}
}

function resizeAll() {

	var sizeRatio = window.innerWidth / 1850;
	// tmpWidth.innerHTML = "window width: " + window.innerWidth;
	initSize(sizeRatio);
	initSpecialSize(sizeRatio);
}

// functions hover key
function pressKey(indexKey, array) {
	if (indexKey != -1)
	{
		var keyCircleElement = array[indexKey].firstChild;
		
		// key[indexKey].style.boxShadow = "0px 1px 1px rgba(0, 0, 0, 0.5)";
		// key[indexKey].style.borderImage = "linear-gradient(to top right, #101113b6, #161718af) 1";
		array[indexKey].style.boxShadow = "0px 1px 1px rgba(0, 0, 0, 0.5)";
		array[indexKey].style.borderImage = "linear-gradient(to top right, #101113b6, #161718af) 1";
		if (keyCircleElement)
		{
			styles = window.getComputedStyle(keyCircleElement);
			imageUrl = styles.backgroundImage.split(',')[0];
			keyCircleElement.style.color = ("rgb(163, 163, 163)");
			keyCircleElement.style.borderColor = ("#252527");
			keyCircleElement.style.backgroundImage = imageUrl + ", " + circleHover;
			// key[indexKey].style.backgroundImage = keyHover;
			array[indexKey].style.backgroundImage = keyHover;
		}
		else
		{
			styles = window.getComputedStyle(array[indexKey]);
			imageUrl = styles.backgroundImage.split(',')[0];

			if (array[indexKey].id == "space")
				array[indexKey].style.backgroundImage = keyHover;
			else
				array[indexKey].style.backgroundImage = imageUrl + ", " + keyHover;
		}
	}
}

function mouseOverKeys(e) {
	var keyCircleElement = e.currentTarget.firstChild;
	
	e.currentTarget.style.boxShadow = "0px 1px 1px rgba(0, 0, 0, 0.5)";
	e.currentTarget.style.borderImage = "linear-gradient(to top right, #101113b6, #161718af) 1";
	if (keyCircleElement)
	{
		styles = window.getComputedStyle(keyCircleElement);
		imageUrl = styles.backgroundImage.split(',')[0];
		keyCircleElement.style.color = ("rgb(163, 163, 163)");
		keyCircleElement.style.borderColor = ("#252527");
		keyCircleElement.style.backgroundImage = imageUrl + ", " + circleHover;
		e.currentTarget.style.backgroundImage = keyHover;
	}
	else
	{
		styles = window.getComputedStyle(e.currentTarget);
		imageUrl = styles.backgroundImage.split(',')[0];
		if (e.currentTarget.id == "space")
			e.currentTarget.style.backgroundImage = keyHover;
		else
			e.currentTarget.style.backgroundImage = imageUrl + ", " + keyHover;

	}
}

function releaseKey(indexKey, array) {
	if (indexKey != -1)
	{
		var keyCircleElement = array[indexKey].firstChild;
		
		array[indexKey].style.borderColor = "rgb(35, 35, 35)";
		array[indexKey].style.boxShadow = "0px 1px 7px rgba(0, 0, 0, 0.9)";
		array[indexKey].style.borderImage = "linear-gradient(to top right, #17181ab6, #84878b57) 1";
		if (keyCircleElement)
		{
			styles = window.getComputedStyle(keyCircleElement);
			imageUrl = styles.backgroundImage.split(',')[0];
			keyCircleElement.style.color = ("#787a7e");
			keyCircleElement.style.borderColor = ("#2f2f31");
			keyCircleElement.style.backgroundColor = ("#27282b");
			keyCircleElement.style.backgroundImage = imageUrl + ", " + circleBack;
			array[indexKey].style.backgroundImage = keyBack;
		}
		else
		{
			styles = window.getComputedStyle(array[indexKey]);
			imageUrl = styles.backgroundImage.split(',')[0];
			array[indexKey].style.backgroundImage = imageUrl + ", " + keyBack;
		}
	}
}

function mouseOutKeys(e) {
	var keyCircleElement = e.currentTarget.firstChild;
	
	e.currentTarget.style.borderColor = "rgb(35, 35, 35)";
	e.currentTarget.style.boxShadow = "0px 1px 7px rgba(0, 0, 0, 0.9)";
	e.currentTarget.style.borderImage = "linear-gradient(to top right, #17181ab6, #84878b57) 1";
	if (keyCircleElement)
	{
		styles = window.getComputedStyle(keyCircleElement);
		imageUrl = styles.backgroundImage.split(',')[0];
		keyCircleElement.style.color = ("#787a7e");
		keyCircleElement.style.borderColor = ("#2f2f31");
		keyCircleElement.style.backgroundColor = ("#27282b");
		keyCircleElement.style.backgroundImage = imageUrl + ", " + circleBack;
		e.currentTarget.style.backgroundImage = keyBack;
	}
	else
	{
		styles = window.getComputedStyle(e.currentTarget);
		imageUrl = styles.backgroundImage.split(',')[0];
		e.currentTarget.style.backgroundImage = imageUrl + ", " + keyBack;
	}
}

var ESC = 27, F1 = 112, F2 = 113, F3 = 114, F4 = 115, F5 = 116, F6 = 117, F7 = 118, F8 = 119,
	F9 = 120, F10 = 121, F11 = 122, F12 = 123, MORESOUND = 175,
	TAB = 9, ENTER = 13, CAP = 20, SHIFTLEFT = 16,
	Q = 81, W = 87, E = 69, R = 82, T = 84, Y = 89, U = 85, I = 73, O = 79, P = 80,
	A = 65, S = 83, D = 68, F = 70, G = 71, H = 72, J = 74, K = 75, L = 76,
	Z = 90, X = 88, C = 67, V = 86, B = 66, N = 78, M = 77,
	INSERT = 45, HOME = 36, PAGEUP = 33, DELETE = 46, END = 35, PAGEDOWN = 34,
	ARROWUP = 38, ARROWDOWN = 40, ARROWLEFT = 37, ARROWRIGHT = 39,
	
	NUMLOCK = 144, SLASH = 111, MULTIPLICATION = 106, SOUSTRACTION = 109, SEVEN = 103,
	EIGHT = 104, NINE = 105, ADDITION = 107, FOUR = 100, FIVE = 101, SIX = 102, ONE = 97,
	TWO = 98, THREE = 99, EQUAL = 13, ZERO = 96, DEL = 110;

function whichKey(e) {
	var indexKey = -1;

	switch(e) {
		case NUMLOCK:
			indexKey = 64;
			break;
		case SLASH:
			indexKey = 65;
			break;
		case MULTIPLICATION:
			indexKey = 66;
			break;

		case SEVEN:
			indexKey = 67;
			break;
		case EIGHT:
			indexKey = 68;
			break;
		case NINE:
			indexKey = 69;
			break;
		case FOUR:
			indexKey = 70;
			break;
		case FIVE:
			indexKey = 71;
			break;
		case SIX:
			indexKey = 72;
			break;
		case ONE:
			indexKey = 73;
			break;
		case TWO:
			indexKey = 74;
			break;
		case THREE:
			indexKey = 75;
			break;

		case ZERO:
			indexKey = 76;
			break;
		case DEL:
			indexKey = 77;
			break;

		case SOUSTRACTION:
			indexKey = 78;
			break;
		case ADDITION:
			indexKey = 79;
			break;
		case EQUAL:
			indexKey = 80;
			break;

		case INSERT:
			indexKey = 54;
			break;
		case HOME:
			indexKey = 55;
			break;
		case PAGEUP:
			indexKey = 56;
			break;
		case DELETE:
			indexKey = 57;
			break;
		case END:
			indexKey = 58;
			break;
		case PAGEDOWN:
			indexKey = 59;
			break;

		case ARROWUP:
			indexKey = 60;
			break;
		case ARROWLEFT:
			indexKey = 61;
			break;
		case ARROWDOWN:
			indexKey = 62;
			break;
		case ARROWRIGHT:
			indexKey = 63;
			break;


		case ESC:
			indexKey = 100;
			break;
		case F1:
			indexKey = 101;
			break;
		case F2:
			indexKey = 102;
			break;
		case F3:
			indexKey = 103;
			break;
		case F4:
			indexKey = 104;
			break;
		case F5:
			indexKey = 105;
			break;
		case F6:
			indexKey = 106;
			break;
		case F7:
			indexKey = 107;
			break;
		case F8:
			indexKey = 108;
			break;
		case F9:
			indexKey = 109;
			break;
		case F10:
			indexKey = 110;
			break;
		case F11:
			indexKey = 111;
			break;
		case F12:
			indexKey = 112;
			break;
		case MORESOUND:
			indexKey = 113;
			break;

		case 192:
			indexKey = 0;
			break;
		case 49:
			indexKey = 1;
			break;
		case 50:
			indexKey = 2;
			break;
		case 51:
			indexKey = 3;
			break;
		case 52:
			indexKey = 4;
			break;
		case 53:
			indexKey = 5;
			break;
		case 54:
			indexKey = 6;
			break;
		case 55:
			indexKey = 7;
			break;
		case 56:
			indexKey = 8;
			break;
		case 57:
			indexKey = 9;
			break;
		case 48:
			indexKey = 10;
			break;
		case 189:
			indexKey = 11;
			break;
		case 187:
			indexKey = 12;
			break;
		case 8:
			indexKey = 13;
			break;

		case TAB:
			indexKey = 14;
			break;
		case ENTER:
			indexKey = 27;
			break;
		case CAP:
			indexKey = 28;
			break;
		case SHIFTLEFT:
			indexKey = 41;
			break;
		// case SHIFTRIGHT:
		// 	indexKey = 27;
		// 	break;

		case 219:
			indexKey = 25;
			break;
		case 221:
			indexKey = 26;
			break;

		case 186:
			indexKey = 38;
			break;
		case 222:
			indexKey = 39;
			break;
		case 220:
			indexKey = 40;
			break;

		case 188:
			indexKey = 50;
			break;
		case 190:
			indexKey = 51;
			break;
		case 191:
			indexKey = 52;
			break;

		case Q:
			indexKey = 15;
			break;
		case W:
			indexKey = 16;
			break;
		case E:
			indexKey = 17;
			break;
		case R:
			indexKey = 18;
			break;
		case T:
			indexKey = 19;
			break;
		case Y:
			indexKey = 20;
			break;
		case U:
			indexKey = 21;
			break;
		case I:
			indexKey = 22;
			break;
		case O:
			indexKey = 23;
			break;
		case P:
			indexKey = 24;
			break;
		case A:
			indexKey = 29;
			break;
		case S:
			indexKey = 30;
			break;
		case D:
			indexKey = 31;
			break;
		case F:
			indexKey = 32;
			break;
		case G:
			indexKey = 33;
			break;
		case H:
			indexKey = 34;
			break;
		case J:
			indexKey = 35;
			break;
		case K:
			indexKey = 36;
			break;
		case L:
			indexKey = 37;
			break;
		case 226:
			indexKey = 42;
			break;
		case Z:
			indexKey = 43;
			break;
		case X:
			indexKey = 44;
			break;
		case C:
			indexKey = 45;
			break;
		case V:
			indexKey = 46;
			break;
		case B:
			indexKey = 47;
			break;
		case N:
			indexKey = 48;
			break;
		case M:
			indexKey = 49;
			break;

		case CTRLLEFT:
			indexKey = 200;
			break;
		case OPT:
			indexKey = 201;
			break;
		case CMD:
			indexKey = 202;
			break;
		case SPACE:
			indexKey = 203;
			break;
	}
	return indexKey;
}

function whichKeyPress(e) {
	// window.alert(e.which);
	var tmpIndex = whichKey(e.which);

	if (tmpIndex >= 100 && tmpIndex < 200)
	{
		pressKey(tmpIndex - 100, keyTop);
	}
	else if (tmpIndex >= 200 && tmpIndex < 300)
		pressKey(tmpIndex - 200, keyBottom);
	else
	{
		if (tmpIndex == 41)
		{
			pressKey(tmpIndex, key);
			pressKey(53, key);
		}
		else
			pressKey(tmpIndex, key);
	}
}

function whichKeyRelease(e) {
	var tmpIndex = whichKey(e.which);

	if (tmpIndex >= 100 && tmpIndex < 200)
		releaseKey(tmpIndex - 100, keyTop);
	else if (tmpIndex >= 200 && tmpIndex < 300)
		releaseKey(tmpIndex - 200, keyBottom);
	else
	{
		if (tmpIndex == 41)
		{
			releaseKey(tmpIndex, key);
			releaseKey(53, key);
		}
		else
			releaseKey(tmpIndex, key);
	}
}

resizeAll();
initTexture();

window.addEventListener("resize", resizeAll);
window.addEventListener("keydown", whichKeyPress);
window.addEventListener("keyup", whichKeyRelease);

keyboard.style.display = "block";