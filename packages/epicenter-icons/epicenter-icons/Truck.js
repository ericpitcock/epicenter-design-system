import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '17', 'cy': '18', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 18C9 19.1046 8.10457 20 7 20C5.89543 20 5 19.1046 5 18C5 16.8954 5.89543 16 7 16C8.10457 16 9 16.8954 9 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 18H15M13 7H17.0388C17.6463 7 18.2209 7.27618 18.6005 7.75061L21.5617 11.4522C21.8454 11.8068 22 12.2474 22 12.7016V17C22 17.5523 21.5523 18 21 18H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 18H13V5C13 4.44772 12.5523 4 12 4H3C2.44771 4 2 4.44772 2 5V17C2 17.5523 2.44772 18 3 18H5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13 7L14.9715 10.9019C15.3118 11.5754 16.0021 12 16.7566 12H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Truck',
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
