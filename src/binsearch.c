#include <stdio.h>

int binsearch(int x, int v[], int n) {
  int low, high, mid;
  low = 0;
  high = n-1;
  while(low <= high) {
    mid = (low + high) / 2;
    if(x < v[mid]) {
      high = mid - 1;
    } else if(x > v[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
int binsearch2(int x, int v[], int low, int high) {
  int mid;

  if(high < low) {
    return -1;
  }
  mid = (low + high) / 2;
  if(x < v[mid]) {
    return binsearch2(x, v, low, mid-1);
  } else if(x > v[mid]) {
    low = low + 1;
    return binsearch2(x, v, mid+1, high);
  } else {
    return mid;
  }
}

int main(void) {
  int a[] = {1,2,3,4,5};
  printf("%d\n", binsearch(3, a, 5));
  printf("%d\n", binsearch(9, a, 5));
  return 0;
}
