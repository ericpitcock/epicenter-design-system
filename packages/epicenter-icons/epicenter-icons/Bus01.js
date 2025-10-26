import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.5 6H19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 20V22M7 20V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 17V6.14093C20 5.72408 19.8718 5.31754 19.584 5.01592C18.6677 4.0553 16.2147 2 12 2C7.7853 2 5.33229 4.0553 4.41597 5.01592C4.12825 5.31754 4 5.72408 4 6.14093V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 14C6.41266 14.655 9 15 11.5 15C14 15 17.5683 14.5802 20 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 10.5L2 9M22 10.5V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M4.5 17.5H6M18 17.5H19.5M11 17.5H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bus01',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
