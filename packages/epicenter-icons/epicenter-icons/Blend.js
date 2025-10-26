import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '17', 'cy': '17', 'r': '5' })
const _hoisted2 = h('path', { 'd': 'M7 13H3.5C2.67157 13 2 12.3284 2 11.5V3.5C2 2.67157 2.67157 2 3.5 2H11.5C12.3284 2 13 2.67157 13 3.5V7', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.0348 19C9.17734 18.5206 7 16.0355 7 13.0418C7 9.70499 9.70499 7 13.0418 7C16.0355 7 18.5206 9.17734 19 12.0348' })

export default defineComponent({
    name: 'Blend',
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
