import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 17C9 17 9.5 21 12 21C14.5 21 15 17 17 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 3C8.5 5.27896 7.13238 10.0177 5.73581 12.1124C4.16269 14.4718 2.78009 18.3771 5.73797 19.8041C7.19815 20.5085 9 19.0868 9 19.0868', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 3C15.5 5.27809 16.8676 10.0177 18.2642 12.1124C19.8373 14.4718 21.2199 18.3771 18.262 19.8041C16.8018 20.5085 15 19.0868 15 19.0868', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Nose',
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
