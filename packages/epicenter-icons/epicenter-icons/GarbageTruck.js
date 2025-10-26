import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 9V12M7 10V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '17', 'cy': '18', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '7', 'cy': '18', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 4H15M15 4H7.41423C7.149 4 6.89464 4.10536 6.7071 4.29291L2.29308 8.70712C2.10556 8.89465 2.00021 9.14899 2.00021 9.41419L2.00002 17C2.00001 17.5523 2.44773 18 3.00002 18H5M15 4V11C15 11.5523 15.4477 12 16 12H22V17C22 17.5523 21.5523 18 21 18H19M9 18H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15 7H18.2639C19.0215 7 19.714 7.428 20.0528 8.10557L22 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GarbageTruck',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
