# JS Sort Visualization
Please go to [this webpage](https://michael21910.github.io/demo/sort/index.html) for more detail or demoing.  
  
Sorting is too difficult for those who are exposed to programming languages for the first time.  
Thus, I wrote this to let them know more by what is sorting.  
  
There are currently two sorting algorithms:  
* O(n²) - Bubble sort  
* O(n²) - Selection sort  
* O(n²) - Exchange sort 
* O(n²) - Insertion sort
  
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

//n is the size of the array
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
```C++
//Exchange sort

//n is the size of the array
for(int i = 0; i < n; i++){
  for(int j = i + 1; j < n; j++){
    if(arr[i] < arr[j]){
      swap arr[i] and arr[j]
    }
  }
}
```
```C++
//Insertion sort

//n is the size of the array
for(int i = 1; i < n; i++){
  int key = arr[i];
  int j = i - 1;
  while(key < arr[j] && j >= 0){
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
```
  
Coding is hard, so you need to put more effort in it to make it worth it.  
Michael Hsueh 08/18/2021
