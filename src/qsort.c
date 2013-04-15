#include <stdio.h>

void qsort(int v[], int left, int right);
void swap(int v[], int i, int j);

int main(int argc, const char *argv[])
{
  int arr[] = { 8,5,6,7,9,0,4,2,3,1 };
  qsort(arr, 0, 9);
  int i;
  for(i=0;i<10;i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
  return 0;
}


void qsort(int v[], int left, int right) {
  int i, last;

  if(left >= right) {
    return;
  }
  swap(v, left, (left + right)/2);
  last = left;
  for(i=left+1; i<=right; i++) {
    if(v[i] < v[left]) {
      swap(v, ++last, i);
    }
  }
  swap(v, left, last);
  qsort(v, left, last-1);
  qsort(v, last+1, right);
}

void swap(int v[], int i, int j) {
  int temp;

  temp = v[i];
  v[i] = v[j];
  v[j] = temp;
}


