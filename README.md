# ExelBID
> 해당 문서는 2021-02-17 18:29 에 작성되었습니다.


## Feature

## Arguments
> `adPosition` 을 제외한 데이터는 `ExelBID Admin` 에서 확인 할 수 있습니다. 

### Required
| property name | value type  | description               | sample |
| ------------- | ----------- | ------------------------- | ------ |
| `width`       | string      | 배너 광고의 width 값      | 320    |
| `height`      | string      | 배너 광고의 height 값     | 100    |
| `adUnitCode`  | string      | 배너 광고의 Unit Code 값  | -      |
| `adPosition`  | adDirection | 배너 광고를 배치시킬 위치 | bottom |


## Prototype

### Function Prototype

```typescript
function Exelbid(props: exelbidType) { . . . }
```
### Component Prototype
> All Props Data is Fake
```jsx
<Exelbid
    width="320"
    height="100"
    adUnitCode="danbi-test-code"
    adPosition="danbi-test-position"
/>
```

## Usage

### Step 1. Import Module

```tsx
import Exelbid from "Danbi-Exelbid"     // => Step 1.
```

### Step 2. Make Component Using `Danbi-Exelbid`

```tsx
import Exelbid from "Danbi-Exelbid"     // => Step 2.

<Exelbid/>
```

### Step 3. Initialize Component Arguments
> If you don't know about argsments then [Click Here](#arguments)

```tsx {4,5,6,7}
import Exelbid from "Danbi-Exelbid"

<Exelbid
    width=""                            // => Step 3.
    height=""                           // => Step 3.
    adUnitCode=""                       // => Step 3.
    adPosition=""                       // => Step 3.
/>
```