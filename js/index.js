//BS -> Bubble sort
//SS -> Selection sort
//ES -> Exchange sort
//IS -> Insertion sort
var BS_num_arr = new Array(5)
var SS_num_arr = new Array(5)
var ES_num_arr = new Array(5)
var IS_num_arr = new Array(5)
window.onload = function () {
    //fade in
    setTimeout(() => {
        var forJS = document.getElementById("forJS");
        forJS.style.opacity = 1;
    }, 500);

    //reset all sorting algorithms and patterns
    resetAll_algorithms()

    //For Bubble sort
    //If click reset then reset all (color, number, next step btn)
    document.getElementById("BSresetBtn").addEventListener('click', function () {
        BS_resetAll()
    })

    //if click next step then check finish sort or not
    //if need sort then change all color red then sort, swapped element both by color blue
    //if no need to sort then all color green, cannot press next step button
    document.getElementById("BSnextBtn").addEventListener('click', function () {
        var BS_needSort = false
        for (var i = 0; i < BS_num_arr.length - 1; i++) {
            if (BS_num_arr[i] > BS_num_arr[i + 1]) {
                BS_needSort = true
            }
        }

        if (BS_needSort) {
            for (var i = 0; i < BS_num_arr.length; i++) {
                document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
            }

            for (var i = BS_num_arr.length - 1; i > 0; i--) {
                var BS_stop = false
                for (var j = 0; j < i; j++) {
                    if (BS_num_arr[i] < BS_num_arr[j]) {
                        var temp = BS_num_arr[i]
                        BS_num_arr[i] = BS_num_arr[j]
                        BS_num_arr[j] = temp
                        BS_stop = true
                        document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                        document.getElementById("BScircle" + (j + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                        break
                    }
                }
                if (BS_stop) {
                    break
                }
            }

            for (var i = 0; i < BS_num_arr.length; i++) {
                document.getElementById("BScircle" + (i + 1)).innerHTML = BS_num_arr[i]
            }
        }
        else {
            document.getElementById("BSnextBtn").innerHTML = "Finish sorting!"
            document.getElementById("BSnextBtn").style.cursor = "not-allowed"
            for (var i = 0; i < BS_num_arr.length; i++) {
                document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(123, 139, 111)"
            }
        }
    })

    //for selection sort
    //If click reset then reset all (color, number, next step btn)
    document.getElementById("SSresetBtn").addEventListener('click', function () {
        SS_resetAll()
    })

    //if click next step then check finish sort or not
    //if need sort then change all color red then sort, swapped element both by color blue
    //if no need to sort then all color green, cannot press next step button
    document.getElementById("SSnextBtn").addEventListener('click', function () {
        var SS_needSort = false
        for (var i = 0; i < SS_num_arr.length - 1; i++) {
            if (SS_num_arr[i] > SS_num_arr[i + 1]) {
                SS_needSort = true
            }
        }

        if (SS_needSort) {
            for (var i = 0; i < SS_num_arr.length; i++) {
                document.getElementById("SScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
            }

            for (var i = 0; i < SS_num_arr.length; i++) {
                var temp_index = i
                for (var j = i + 1; j < SS_num_arr.length; j++) {
                    if (SS_num_arr[j] < SS_num_arr[temp_index]) {
                        temp_index = j
                    }
                }
                if (i != temp_index) {
                    var temp = SS_num_arr[i]
                    SS_num_arr[i] = SS_num_arr[temp_index]
                    SS_num_arr[temp_index] = temp
                    document.getElementById("SScircle" + (i + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                    document.getElementById("SScircle" + (temp_index + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                    break
                }
                else {
                    continue
                }
            }

            for (var i = 0; i < SS_num_arr.length; i++) {
                document.getElementById("SScircle" + (i + 1)).innerHTML = SS_num_arr[i]
            }
        }
        else {
            document.getElementById("SSnextBtn").innerHTML = "Finish sorting!"
            document.getElementById("SSnextBtn").style.cursor = "not-allowed"
            for (var i = 0; i < SS_num_arr.length; i++) {
                document.getElementById("SScircle" + (i + 1)).style.backgroundColor = "rgb(123, 139, 111)"
            }
        }
    })

    //for exchange sort
    //If click reset then reset all (color, number, next step btn)
    document.getElementById("ESresetBtn").addEventListener('click', function () {
        ES_resetAll()
    })

    //if click next step then check finish sort or not
    //if need sort then change all color red then sort, swapped element both by color blue
    //if no need to sort then all color green, cannot press next step button
    document.getElementById("ESnextBtn").addEventListener('click', function () {
        var ES_needSort = false
        for (var i = 0; i < ES_num_arr.length - 1; i++) {
            if (ES_num_arr[i] > ES_num_arr[i + 1]) {
                ES_needSort = true
            }
        }

        if (ES_needSort) {
            for (var i = 0; i < ES_num_arr.length; i++) {
                document.getElementById("EScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
            }

            for (var i = 0; i < ES_num_arr.length; i++) {
                var ES_stop = false
                for (var j = i + 1; j < ES_num_arr.length; j++) {
                    if (ES_num_arr[i] > ES_num_arr[j]) {
                        ES_stop = true
                        var temp = ES_num_arr[i]
                        ES_num_arr[i] = ES_num_arr[j]
                        ES_num_arr[j] = temp
                        document.getElementById("EScircle" + (i + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                        document.getElementById("EScircle" + (j + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                        break
                    }
                }
                if (ES_stop) {
                    break
                }
            }

            for (var i = 0; i < ES_num_arr.length; i++) {
                document.getElementById("EScircle" + (i + 1)).innerHTML = ES_num_arr[i]
            }
        }
        else {
            document.getElementById("ESnextBtn").innerHTML = "Finish sorting!"
            document.getElementById("ESnextBtn").style.cursor = "not-allowed"
            for (var i = 0; i < ES_num_arr.length; i++) {
                document.getElementById("EScircle" + (i + 1)).style.backgroundColor = "rgb(123, 139, 111)"
            }
        }
    })

    //For Insertion sort
    //If click reset then reset all (color, number, next step btn)
    document.getElementById("ISresetBtn").addEventListener('click', function () {
        IS_resetAll()
    })

    //if click next step then check finish sort or not
    //if need sort then change all color red then sort, swapped element both by color blue
    //if no need to sort then all color green, cannot press next step button
    document.getElementById("ISnextBtn").addEventListener('click', function () {
        var IS_needSort = false
        for (var i = 0; i < IS_num_arr.length; i++) {
            if (IS_num_arr[i] > IS_num_arr[i + 1]) {
                IS_needSort = true
            }
        }

        if (IS_needSort) {
            for (var i = 0; i < IS_num_arr.length; i++) {
                document.getElementById("IScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
            }

            //get the compare array
            var IS_temp_num_arr = new Array(5)
            for (var t = 0; t < IS_num_arr.length; t++) {
                IS_temp_num_arr[t] = IS_num_arr[t]
            }

            for (var i = 1; i < IS_num_arr.length; i++) {
                var key = IS_num_arr[i]
                var j = i - 1
                var IS_stop = false
                while (key < IS_num_arr[j] & j >= 0) {
                    var IS_stop = true
                    IS_num_arr[j + 1] = IS_num_arr[j]
                    j--
                }
                IS_num_arr[j + 1] = key
                if (IS_stop) {
                    break
                }
            }

            //compare the array, change the color to blue if the number are different
            for (var t = 0; t < IS_num_arr.length; t++) {
                if (IS_num_arr[t] != IS_temp_num_arr[t]) {
                    document.getElementById("IScircle" + (t + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                }
            }

            for (var i = 0; i < IS_num_arr.length; i++) {
                document.getElementById("IScircle" + (i + 1)).innerHTML = IS_num_arr[i]
            }
        }
        else {
            document.getElementById("ISnextBtn").innerHTML = "Finish sorting!"
            document.getElementById("ISnextBtn").style.cursor = "not-allowed"
            for (var i = 0; i < IS_num_arr.length; i++) {
                document.getElementById("IScircle" + (i + 1)).style.backgroundColor = "rgb(123, 139, 111)"
            }
        }
    })
}

//note that the foor loop here is 5 instead of a parameter
function resetAll_algorithms() {
    for (var i = 0; i < 5; i++) {
        var BS_temp = Math.floor(Math.random() * 100 + 1)
        var SS_temp = Math.floor(Math.random() * 100 + 1)
        var ES_temp = Math.floor(Math.random() * 100 + 1)
        var IS_temp = Math.floor(Math.random() * 100 + 1)
        document.getElementById("BScircle" + (i + 1)).innerHTML = BS_temp
        document.getElementById("SScircle" + (i + 1)).innerHTML = SS_temp
        document.getElementById("EScircle" + (i + 1)).innerHTML = ES_temp
        document.getElementById("IScircle" + (i + 1)).innerHTML = IS_temp
        BS_num_arr[i] = BS_temp
        SS_num_arr[i] = SS_temp
        ES_num_arr[i] = ES_temp
        IS_num_arr[i] = IS_temp
        document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
        document.getElementById("SScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
        document.getElementById("EScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
        document.getElementById("IScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
    }
    document.getElementById("BSnextBtn").innerHTML = "Next step"
    document.getElementById("SSnextBtn").innerHTML = "Next step"
    document.getElementById("ESnextBtn").innerHTML = "Next step"
    document.getElementById("ISnextBtn").innerHTML = "Next step"
    document.getElementById("BSnextBtn").style.cursor = "pointer"
    document.getElementById("SSnextBtn").style.cursor = "pointer"
    document.getElementById("ESnextBtn").style.cursor = "pointer"
    document.getElementById("ISnextBtn").style.cursor = "pointer"
}

function BS_resetAll() {
    for (var i = 0; i < BS_num_arr.length; i++) {
        var temp = Math.floor(Math.random() * 100 + 1)
        document.getElementById("BScircle" + (i + 1)).innerHTML = temp
        BS_num_arr[i] = temp
        document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
    }
    document.getElementById("BSnextBtn").innerHTML = "Next step"
    document.getElementById("BSnextBtn").style.cursor = "pointer"
}

function SS_resetAll() {
    for (var i = 0; i < SS_num_arr.length; i++) {
        var temp = Math.floor(Math.random() * 100 + 1)
        document.getElementById("SScircle" + (i + 1)).innerHTML = temp
        SS_num_arr[i] = temp
        document.getElementById("SScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
    }
    document.getElementById("SSnextBtn").innerHTML = "Next step"
    document.getElementById("SSnextBtn").style.cursor = "pointer"
}

function ES_resetAll() {
    for (var i = 0; i < ES_num_arr.length; i++) {
        var temp = Math.floor(Math.random() * 100 + 1)
        document.getElementById("EScircle" + (i + 1)).innerHTML = temp
        ES_num_arr[i] = temp
        document.getElementById("EScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
    }
    document.getElementById("ESnextBtn").innerHTML = "Next step"
    document.getElementById("ESnextBtn").style.cursor = "pointer"
}

function IS_resetAll() {
    for (var i = 0; i < IS_num_arr.length; i++) {
        var temp = Math.floor(Math.random() * 100 + 1)
        document.getElementById("IScircle" + (i + 1)).innerHTML = temp
        IS_num_arr[i] = temp
        document.getElementById("IScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
    }
    document.getElementById("ISnextBtn").innerHTML = "Next step"
    document.getElementById("ISnextBtn").style.cursor = "pointer"
}

function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}