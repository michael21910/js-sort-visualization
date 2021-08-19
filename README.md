# JS Sort Visualization
Please go to [this webpage](https://michael21910.github.io/demo/sort/index.html) for more detail or demoing.  
  
Sorting is too difficult for those who are exposed to programming languages for the first time.  
Thus, I wrote this to let them know more by what is sorting.  
  
There are currently two sorting algorithms:  
* O(n²) - Bubble sort  
* O(n²) - Selection sort  
  
The C++ psuedocode are as follows:  
```C++
//Bubble sort

//n is the size of the array
for(int i = n - 1; i > 0; i--){
  for(int j = 0; j < i; j++){
    if(arr[i] < arr[j]){
      swap arr[i] and arr[j]
    }
  }
}
```
```C++
//Selection sort

//n is the size of the 
for(int i = 0; i < n; i++){
  int temp_index = i;
  for(int j = i + 1; j < n; j++){
    if(arr[j] < arr[temp_index]){
      temp_index = j;
    }
  }
  if(i != temp_index){
    swap arr[i] and arr[temp_index]
  }
}
```

Coding is hard, so you need to put more effort in it to make it worth it.  
Michael Hsueh 08/18/2021
