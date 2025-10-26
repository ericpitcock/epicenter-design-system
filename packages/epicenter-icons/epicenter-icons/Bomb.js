import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 8.5L11.4558 6.86754C11.2358 6.20753 11.1258 5.87752 10.864 5.68876C10.6021 5.5 10.2542 5.5 9.55848 5.5H8.44152C7.7458 5.5 7.39794 5.5 7.13605 5.68876C6.87416 5.87752 6.76416 6.20753 6.54415 6.86754L6 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 7.5L20.5 6M20.5 6L19 4.5M20.5 6L19 7.5M20.5 6L22 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 6C14.9997 6 14.4249 3.41158 11.8903 2.226C9.66362 1.18444 9 3.99666 9 5.49916', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bomb',
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
