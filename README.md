# JS Sort Visualization
Please go to [this webpage](https://michael21910.github.io/demo/sort/index.html) for more detail or demoing.  
  
Sorting is too difficult for those who are exposed to programming languages for the first time.  
Thus, I wrote this to let them know more by what is sorting.  
  
Algorithms in [this webpage](https://michael21910.github.io/demo/sort/index.html):    
* O(n²) - Bubble sort  
* O(n²) - Selection sort  
* O(n²) - Exchange sort 
* O(n²) - Insertion sort
  
## What is sorting?
A sorting algorithm in Computer Science is an algorithm that puts elements of a list into an order.  
In general, the elements will be in ascending order or decending order.  
  
## Demo :eyes:
* O(n²) - Bubble sort  
![Bubble sort](https://user-images.githubusercontent.com/78197510/130324057-e1155b8a-c8e1-4fc0-bdee-4788c9d4f524.gif)
* O(n²) - Selection sort  
![Selection sort](https://user-images.githubusercontent.com/78197510/130324112-fa679ef3-a8e6-4739-bb9c-04634905a7a1.gif)
* O(n²) - Exchange sort  
![Exchange sort](https://user-images.githubusercontent.com/78197510/130324114-8955a3eb-2569-475e-aa29-9886df80d782.gif)
* O(n²) - Insertion sort  
![Insertion sort](https://user-images.githubusercontent.com/78197510/130324117-a815d2e6-f6f7-470b-8d21-f5977410adc8.gif)
  
## Psuedocode of the sorting algorithms
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
  
## License
[MIT](LICENSE) © Tsuen Hsueh
