import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 9.5V4.00006C20 2.89551 19.1046 2.00008 18 2.00006L4.00003 1.99985C2.89545 1.99983 2 2.89526 2 3.99985V17.9992C2 19.1038 2.89543 19.9992 4 19.9992H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 7H20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.4602 13.2441L12.6653 12.0978C12.3338 12.0491 12.0491 12.3338 12.0978 12.6653L13.2441 20.4602C13.3039 20.8669 13.8017 21.0316 14.0924 20.741L15.8131 19.0202C16.0084 18.825 16.325 18.825 16.5202 19.0202L19.1464 21.6464C19.3417 21.8417 19.6583 21.8417 19.8536 21.6464L21.6464 19.8536C21.8417 19.6583 21.8417 19.3417 21.6464 19.1464L19.0202 16.5202C18.825 16.325 18.825 16.0084 19.0202 15.8131L20.741 14.0924C21.0316 13.8017 20.8669 13.3039 20.4602 13.2441Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CursorInWindow',
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
