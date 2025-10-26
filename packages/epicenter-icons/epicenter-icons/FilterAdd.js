import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.4 7.5L20.6402 7.29985C20.8682 7.10985 21 6.8284 21 6.53162V4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V6.53163C3 6.8284 3.13182 7.10985 3.35982 7.29985L8.69075 11.7423C8.88918 11.9077 9.01593 12.1434 9.04445 12.4001L9.84155 19.574C9.91841 20.2657 10.6607 20.6693 11.283 20.3578L13.5216 19.2373C13.8144 19.0907 14.0169 18.8101 14.0637 18.4859L14.3504 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 8V15M21 11.5H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilterAdd',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
