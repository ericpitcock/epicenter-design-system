import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.75 22L6.25 14L2.75 22H9.75Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.25 9.58823C5.25 14.7862 9.46379 19 14.6618 19C17.2269 19 19.5524 17.9738 21.25 16.3096L7.94042 3C6.27618 4.69765 5.25 7.0231 5.25 9.58823Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '19.25', 'cy': '4', 'r': '2' })
const _hoisted4 = h('path', { 'd': 'M12.25 7L17.75 5.5L16.25 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Satellite',
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
            _hoisted4
        ])
    }
})
