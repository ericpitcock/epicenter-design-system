import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.05092 21.4375C3.86809 22.3552 5.27419 22.0742 6.07413 21.1414L10.302 16.2993C10.6806 15.8658 11.3462 15.8405 11.7565 16.2441L13.5417 18L20.9037 10.3469C23.1874 7.973 22.9868 4.18447 20.5199 2L3.05103 18.6798C2.29742 19.4471 2.33551 20.6342 3.05092 21.4375Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Knife02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
