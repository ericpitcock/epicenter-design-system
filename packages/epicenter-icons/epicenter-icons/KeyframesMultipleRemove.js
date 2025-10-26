import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 12H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.00001 8L6.57612 5.68664C7.32991 4.77112 8.67008 4.77112 9.42388 5.68664L13.5319 10.676C14.156 11.434 14.156 12.566 13.5319 13.324L9.42388 18.3134C8.67008 19.2289 7.32992 19.2289 6.57612 18.3134L5.00001 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 19L21.5513 13.3016C22.1496 12.5526 22.1496 11.4474 21.5513 10.6984L17 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13 19L17.5513 13.3016C18.1496 12.5526 18.1496 11.4474 17.5513 10.6984L13 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'KeyframesMultipleRemove',
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
