import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 6H5C3.34315 6 2 7.34315 2 9V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V9C22 7.34315 20.6569 6 19 6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.3333 12.6665L10.6667 15.3333M13.3333 12.6665C14.0697 13.4029 15.2636 13.4032 16 12.6668M13.3333 12.6665C12.597 11.9301 12.597 10.7364 13.3333 10M10.6667 15.3333C11.4031 16.0698 11.403 17.2636 10.6667 18M10.6667 15.3333C9.93031 14.5969 8.73638 14.5968 8 15.3332', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 3L12 6L16 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TvFix',
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
