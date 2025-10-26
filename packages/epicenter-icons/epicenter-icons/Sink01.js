import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 14C15.5275 14 18.4456 11.3908 18.9295 7.99703C19.0075 7.45028 18.5523 7 18 7H6C5.44772 7 4.9925 7.45028 5.07046 7.99703C5.55442 11.3908 8.4725 14 12 14Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 7V3.5C13 2.67157 13.6716 2 14.5 2C15.3284 2 16 2.67157 16 3.5V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 7V5.00001C10 4.44772 9.55229 4.00001 9.00001 4.00001L8 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5 13.5L14 22M9.5 13.5L10 22', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 22H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sink01',
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
