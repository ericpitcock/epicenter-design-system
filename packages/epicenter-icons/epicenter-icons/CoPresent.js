import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 18V18C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.5 21H17.5C17.5 18.2386 15.0376 16 12 16C8.96243 16 6.5 18.2386 6.5 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 11C14.5 12.3807 13.3807 13.5 12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11Z' })

export default defineComponent({
    name: 'CoPresent',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
