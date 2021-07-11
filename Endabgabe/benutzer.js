var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var buttonRezeptabschicken = document.getElementById("rezeptabschicken");
buttonRezeptabschicken.addEventListener("click", clickAbschicken);
var buttonRezepterhalten = document.getElementById("rezepterhalten");
buttonRezepterhalten.addEventListener("click", clickErhalten);
function clickAbschicken() {
    return __awaiter(this, void 0, void 0, function () {
        var form, url, query, response, ausgabe, serverA;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("hier bin ich auch");
                    form = new FormData(document.forms[0]);
                    url = "https://sebieyesstonegis2021.herokuapp.com";
                    query = new URLSearchParams(form);
                    url = url + "/abschicken" + "?" + query.toString();
                    console.log(url);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    ausgabe = _a.sent();
                    serverA = document.getElementById("datenbank");
                    serverA.innerHTML = ausgabe;
                    return [4 /*yield*/, fetch(url)];
                case 3:
                    _a.sent();
                    console.log(form.get("kategorie"));
                    return [2 /*return*/];
            }
        });
    });
}
function clickErhalten() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, ausgabe, datenbank, aktuelleRe, div, p1, p2, p3, p4, p5, editButton, deleteButton;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("BIN IN DER FUNKTION");
                    url = "https://sebieyesstonegis2021.herokuapp.com";
                    url = url + "/erhalten" + "?";
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ausgabe = _a.sent();
                    console.log(ausgabe);
                    datenbank = document.getElementById("datenbank");
                    aktuelleRe = ausgabe[ausgabe.length - 1];
                    div = document.createElement("div");
                    p1 = document.createElement("p");
                    p2 = document.createElement("p");
                    p3 = document.createElement("p");
                    p4 = document.createElement("p");
                    p5 = document.createElement("p");
                    editButton = document.createElement("button");
                    editButton.innerHTML = "Bearbeiten";
                    editButton.addEventListener("click", function () {
                        var newRezeptName = document.createElement("input");
                        newRezeptName.value = aktuelleRe.rezeptname;
                        var newRezeptAnzahl = document.createElement("input");
                        newRezeptAnzahl.value = aktuelleRe.anzahl.toString();
                        var newRezeptZutaten = document.createElement("input");
                        newRezeptZutaten.value = aktuelleRe.zutaten.toString();
                        var newRezeptKategorie = document.createElement("input");
                        newRezeptKategorie.value = aktuelleRe.kategorie.toString();
                        var newRezeptListe = document.createElement("input");
                        newRezeptListe.value = aktuelleRe.zutatenliste.toString();
                        editButton.hidden = true;
                        p1.innerHTML = "Rezeptename: ";
                        p1.appendChild(newRezeptName);
                        p2.innerHTML = "Anzahl: ";
                        p2.appendChild(newRezeptAnzahl);
                        p3.innerHTML = "Zutaten: ";
                        p3.appendChild(newRezeptZutaten);
                        p4.innerHTML = "Kategorie: ";
                        p4.appendChild(newRezeptKategorie);
                        p5.innerHTML = "Zutatenliste: ";
                        p5.appendChild(newRezeptListe);
                        var submitEdit = document.createElement("button");
                        submitEdit.innerHTML = "Absenden";
                        submitEdit.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                            var url, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        url = "https://sebieyesstonegis2021.herokuapp.com";
                                        url = url + "/update" + "?" +
                                            "ID=" + aktuelleRe._id +
                                            "&rezeptname=" + encodeURI(newRezeptName.value.toString()) +
                                            "&anzahl=" + encodeURI(newRezeptAnzahl.value.toString()) +
                                            "&zutaten=" + encodeURI(newRezeptZutaten.value.toString()) +
                                            "&kategorie=" + encodeURI(newRezeptKategorie.value.toString()) +
                                            "&zutatenliste=" + encodeURI(newRezeptZutaten.value.toString());
                                        console.log("Sende update Anfrage an : " + url);
                                        return [4 /*yield*/, fetch(url)];
                                    case 1:
                                        response = _a.sent();
                                        console.log("Update anfage hatte rückgabe: ");
                                        console.log(response);
                                        favoritenLaden();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        div.appendChild(submitEdit);
                    });
                    deleteButton = document.createElement("button");
                    deleteButton.innerHTML = "Löschen";
                    deleteButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                        var url, response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    url = "https://sebieyesstonegis2021.herokuapp.com";
                                    url = url + "/entfernen" + "?" + "ID=" + aktuelleRe._id;
                                    return [4 /*yield*/, fetch(url)];
                                case 1:
                                    response = _a.sent();
                                    datenbank.innerHTML = "Rezept gelöscht.";
                                    setTimeout(function () { datenbank.innerHTML = ""; }, 1000);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    p1.innerHTML = "Rezeptename: " + aktuelleRe.rezeptname;
                    p2.innerHTML = "Anzahl: " + aktuelleRe.anzahl;
                    p3.innerHTML = "Zutaten: " + aktuelleRe.zutaten;
                    p4.innerHTML = "Kategorie: " + aktuelleRe.kategorie;
                    p5.innerHTML = "Zutatenliste: " + aktuelleRe.zutatenliste;
                    div.className = "boxkomplett";
                    div.appendChild(p1); //alle infos jeweils
                    div.appendChild(p2);
                    div.appendChild(p3);
                    div.appendChild(p4);
                    div.appendChild(p5);
                    //div.appendChild(favButton);
                    div.appendChild(editButton);
                    datenbank.appendChild(div); //alle enthält
                    console.log("ich hab es hier her geschafft");
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=benutzer.js.map