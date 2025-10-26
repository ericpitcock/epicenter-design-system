import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 13.0303H22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.9888 17.042H18M13 17.042H13.0112', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.99 21H5C3.34315 21 2 19.6569 2 18V13L4.35732 5.13835C4.73787 3.8692 5.90593 3 7.23091 3H16.7591C18.0841 3 19.2521 3.8692 19.6327 5.13835L21.99 13V18C21.99 19.6569 20.6469 21 18.99 21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HardDrive',
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
