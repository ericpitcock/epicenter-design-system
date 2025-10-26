import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 4.5V4C20 3.44772 19.5523 3 19 3H3C2.44772 3 2 3.44772 2 4V6.53163C2 6.8284 2.13182 7.10985 2.35982 7.29985L7.69075 11.7423C7.88918 11.9077 8.01593 12.1434 8.04445 12.4001L8.84155 19.574C8.91841 20.2657 9.66071 20.6693 10.283 20.3578L12.5216 19.2373C12.8144 19.0907 13.0169 18.8101 13.0637 18.4859L13.161 17.8121', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 12.5V15H16.5L22 9.5L19.5 7L14 12.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilterEdit',
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
