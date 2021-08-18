var num_arr = new Array(5);
window.onload = function () {
    window.alert("Welcome to Sorting Demo made by Tsuen Hsueh :D")
    resetAll()
    document.getElementById("BSresetBtn").addEventListener('click', function () {
        resetAll()
    })

    document.getElementById("BSnextBtn").addEventListener('click', function () {
        var needSort = false
        for (var i = 0; i < num_arr.length - 1; i++) {
            if (num_arr[i] > num_arr[i + 1]) {
                needSort = true
            }
        }

        if (needSort) {
            for (var i = 0; i < num_arr.length; i++) {
                document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
            }

            for (var i = num_arr.length - 1; i > 0; i--) {
                var stop = false
                for (var j = 0; j < i; j++) {
                    if (num_arr[i] < num_arr[j]) {
                        var temp = num_arr[i]
                        num_arr[i] = num_arr[j]
                        num_arr[j] = temp
                        stop = true
                        document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                        document.getElementById("BScircle" + (j + 1)).style.backgroundColor = "rgb(156, 168, 184)"
                        break
                    }
                }
                if (stop) {
                    break
                }
            }

            for (var i = 0; i < num_arr.length; i++) {
                document.getElementById("BScircle" + (i + 1)).innerHTML = num_arr[i]
            }
        }
        else {
            document.getElementById("BSnextBtn").innerHTML = "Finish sorting!"
            document.getElementById("BSnextBtn").style.cursor = "not-allowed"
            for (var i = 0; i < num_arr.length; i++) {
                document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(123, 139, 111)"
            }
        }
    })
}

function resetAll() {
    for (var i = 0; i < num_arr.length; i++) {
        needSort = true
        var temp = Math.floor(Math.random() * 100 + 1)
        document.getElementById("BScircle" + (i + 1)).innerHTML = temp
        num_arr[i] = temp
        document.getElementById("BSnextBtn").innerHTML = "Next step"
        document.getElementById("BScircle" + (i + 1)).style.backgroundColor = "rgb(155, 84, 84)"
        document.getElementById("BSnextBtn").style.cursor = "pointer"
    }
}